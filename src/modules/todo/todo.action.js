import { useDispatch } from 'react-redux';
// import { storeDispatch as d } from '../../store';
import { todoActions } from './todo.constants';

export function addNewTodo(todo) {
  return {
    type: todoActions.todoAdd,
    payload: todo
  };
}

export function addNewTodoSuccess(todo) {
  return {
    type: todoActions.todoAddSuccess,
    payload: todo
  };
}

export const updateTodo = (todo) => {
  console.log(todo);
};
