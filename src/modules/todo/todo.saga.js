import { call, put, takeLatest } from 'redux-saga/effects';
import { deleteTodoApi, editTodoApi, saveTodoApi } from './todo.api';
import { todoActions } from './todo.constants';
import { addNewTodoSuccess, editTodoSuccess } from './todo.action';

export function* addNewTodo(action) {
  try {
    const todoRes = yield call(saveTodoApi, action.payload);

    const todo = action.payload;
    todo.id = todoRes;
    action.meta = 'success';

    console.log(todo);
    yield put(addNewTodoSuccess(todo));
  } catch (e) {
    action.meta = 'error';
    console.log(e);
    return e;
  }
}

export function* editTodo(action) {
  try {
    const todoRes = yield call(editTodoApi, action.payload);

    yield put(editTodoSuccess(action.payload));
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
  yield takeLatest(todoActions.todoAdd, addNewTodo);
}

export function* watchEditTodo(...args) {
  yield takeLatest(todoActions.todoEdit, editTodo);
}

export function* watchDeleteTodo(...args) {
  yield takeLatest('DELETE_TODO', deleteTodo);
}
