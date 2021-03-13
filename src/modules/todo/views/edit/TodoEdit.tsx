import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import TodoForm from '../form/TodoForm';
import { editTodo } from '../../todo.action';
import { State } from '../../../../store';
import { Todo } from '../../todo.type';

export default function TodoEdit() {
  const params: any = useParams();
  const dispatch = useDispatch();

  const todo = useSelector((state: State) =>
    state.todos.items.find((item: Todo) => item.id === params.id)
  );

  const todoEditStatus = useSelector(
    (state: State) => state.todos.status
  );

  if (!todo) {
    return <h1>There is no item</h1>;
  }

  const onEditTodo = (todo: Todo) => {
    dispatch(editTodo(todo));
  };

  return <TodoForm submitForm={onEditTodo} todo={todo} />;
}
