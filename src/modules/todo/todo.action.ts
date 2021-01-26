import { Actions } from './todo.constants';
import createAction from '../../tools/actionManager';
import { StoreStateStatus } from '../../tools/types/StoreStateStatus';
import { Todo } from './Todo';

export function addNewTodo(todo: Todo) {
  return createAction(Actions.add, todo);
}

export function addNewTodoSuccess(todo: Todo) {
  return createAction(Actions.addSuccess, todo);
}

export function editTodo(todo: Todo) {
  return createAction(Actions.edit, todo);
}

export function editTodoSuccess(todo: Todo) {
  return createAction(Actions.editSuccess, todo);
}

export function changeTodoStateStatus(status: StoreStateStatus) {
  return createAction(Actions.changeStatus, status);
}
