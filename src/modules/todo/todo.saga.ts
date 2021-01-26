import { call, put, takeLatest } from 'redux-saga/effects';
import { deleteTodoApi, editTodoApi, saveTodoApi } from './todo.api';
import { Actions } from './todo.constants';
import {
  addNewTodoSuccess,
  changeTodoStateStatus,
  editTodoSuccess
} from './todo.action';
import { BaseAction } from '../../tools/actionManager';
import { goTo } from '../../tools/Routing';
import { StoreStateStatus } from '../../tools/types/StoreStateStatus';

export function* addTodo(action: BaseAction) {
  try {
    const todoRes = yield call(saveTodoApi, action.payload);

    const todo = action.payload;
    todo.id = todoRes;

    yield put(addNewTodoSuccess(todo));
  } catch (e) {
    return e;
  }
}

export function* editTodo(action: BaseAction) {
  try {
    const todoRes = yield call(editTodoApi, action.payload);

    yield put(editTodoSuccess(action.payload));

    goTo('/todos');

    yield put(changeTodoStateStatus(StoreStateStatus.idle));
  } catch (e) {
    yield put(changeTodoStateStatus(StoreStateStatus.fail));
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

export function* watchTodoActions(...args: any[]) {
  yield takeLatest(Actions.add, addTodo);
  yield takeLatest(Actions.edit, editTodo);
  yield takeLatest(Actions.delete, deleteTodo);
}
