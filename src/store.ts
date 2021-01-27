import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { fork, spawn } from 'redux-saga/effects';
import { InitialState } from './modules/todo/todo.type';
import Reducer from './modules/todo/todo.reducer';
import TodoWatchActions from './modules/todo/todo.saga';

const sagaMiddleware = createSagaMiddleware();

export interface State {
  todos: InitialState;
}

const reducer = combineReducers({ todos: Reducer });

const preloadedState =
  JSON.parse(localStorage.getItem('redux')) || {};

const store = createStore(
  reducer,
  preloadedState,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

function* rootSaga() {
  yield spawn(TodoWatchActions);
}

sagaMiddleware.run(rootSaga);

store.subscribe(() => {
  localStorage.setItem('redux', JSON.stringify(store.getState()));
});

export const storeDispatch = store.dispatch;

export default store;
