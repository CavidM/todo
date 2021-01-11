import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
// import { editTodo } from '../../todo.slices';
import TodoForm from '../todo-form/TodoForm';

export default function TodoEdit() {
  const params = useParams();
  const dispatch = useDispatch();

  const todo = useSelector((state) =>
    state.todos.items.find((item) => item.id === params.id)
  );

  const onEditTodo = (todo) => {
    dispatch({
      type: 'EDIT_TODO',
      payload: todo
    });
  };

  return <TodoForm submitForm={onEditTodo} todo={todo} />;
}
