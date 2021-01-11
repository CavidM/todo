import { useDispatch } from 'react-redux';
// import { storeDispatch as d } from '../../store';
import { addTodo } from './todo.slice';

export function addNewTodo(todo) {
  const d = useDispatch();
  // return (dispatch) => {
  // console.log(todo);

  return d(addTodo(todo));
  // };
}

export const updateTodo = (todo) => {
  console.log(todo);
};
