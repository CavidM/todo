import { todoActions } from './todo.constants';
import createAction from '../../tools/actionManager';

export function addNewTodo(todo) {
  return createAction(todoActions.todoAdd, todo);
}

export function addNewTodoSuccess(todo) {
  return createAction(todoActions.todoAddSuccess, todo);
}

export function editTodo(todo) {
  return createAction(todoActions.todoEdit, todo);
}

export function editTodoSuccess(todo) {
  return createAction(todoActions.todoEditSuccess, todo);
}
