import { call, put, takeLatest } from 'redux-saga/effects';
import { deleteTodoApi, editTodoApi, saveTodoApi } from './todo.api';

export function* addNewTodo(action) {
  try {
    const todoRes = yield call(saveTodoApi, action.payload);

    const todo = action.payload;
    todo.id = todoRes;

    yield put({
      type: 'ADD_NEW_TODO_SUCCESS',
      payload: todo
    });
  } catch (e) {
    console.log(e);
  }
}

export function* editTodo(action) {
  try {
    const todoRes = yield call(editTodoApi, action.payload);

    yield put({
      type: 'EDIT_TODO_SUCCESS',
      payload: action.payload
    });
  } catch (e) {
    console.log(e);
  }
}

export function* deleteTodo(action) {
  console.log(action);
  try {
    const res = yield call(deleteTodoApi, action.payload);

    yield put({
      type: 'DELETE_TODO_SUCCESS',
      payload: action.payload
    });
  } catch (e) {
    console.log(e);
  }
}

export function* watchAddNewTodo(...args) {
  yield takeLatest('ADD_NEW_TODO', addNewTodo);
}

export function* watchEditTodo(...args) {
  yield takeLatest('EDIT_TODO', editTodo);
}

export function* watchDeleteTodo(...args) {
  yield takeLatest('DELETE_TODO', deleteTodo);
}
