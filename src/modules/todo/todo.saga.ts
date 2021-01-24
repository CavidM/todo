import { call, put, takeLatest } from 'redux-saga/effects';
import { deleteTodoApi, editTodoApi, saveTodoApi } from './todo.api';
import { todoActions } from './todo.constants';
import { addNewTodoSuccess, editTodoSuccess } from './todo.action';
import { actionStatus, BaseAction } from '../../tools/actionManager';

export function* addNewTodo(action: BaseAction) {
  try {
    const todoRes = yield call(saveTodoApi, action.payload);

    const todo = action.payload;
    todo.id = todoRes;
    // action.meta = 'success';

    yield put(addNewTodoSuccess(todo));
  } catch (e) {
    // action.meta = 'error';
    return e;
  }
}

export function* editTodo(action: BaseAction) {
  try {
    const todoRes = yield call(editTodoApi, action.payload);

    yield put(editTodoSuccess(action.payload));

    action.finish(actionStatus.success);
  } catch (e) {
    // action.meta = 'error';
  }
}

export function* deleteTodo(action: BaseAction) {
  // console.log(action);
  try {
    const res = yield call(deleteTodoApi, action.payload);

    yield put({
      type: 'DELETE_TODO_SUCCESS',
      payload: action.payload
    });
  } catch (e) {}
}

export function* watchAddNewTodo(...args: any[]) {
  yield takeLatest(todoActions.todoAdd, addNewTodo);
}

export function* watchEditTodo(...args: any[]) {
  yield takeLatest(todoActions.todoEdit, editTodo);
}

export function* watchDeleteTodo(...args: any[]) {
  yield takeLatest(todoActions.todoDelete, deleteTodo);
}
