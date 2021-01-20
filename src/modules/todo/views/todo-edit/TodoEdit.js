import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
// import { editTodo } from '../../todo.slices';
import TodoForm from '../todo-form/TodoForm';
import { editTodo } from '../../todo.action';

export default function TodoEdit() {
  const params = useParams();
  const dispatch = useDispatch();

  const todo = useSelector((state) =>
    state.todos.items.find((item) => item.id === params.id)
  );

  if(!Boolean(todo)) {
    return <h1>There is no item</h1>
  }

  const onEditTodo = (todo) => {
    const x = dispatch(editTodo(todo));
    console.log(x);
  };

  return <TodoForm submitForm={onEditTodo} todo={todo} />;
}







