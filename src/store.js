import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import todoReducer from './modules/todo/todo.reducer';
import todoSaga, {
  watchAddNewTodo,
  watchDeleteTodo,
  watchEditTodo
} from './modules/todo/todo.saga';
import createSagaMiddleware from 'redux-saga';
import { fork, spawn } from 'redux-saga/effects';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({ todos: todoReducer });

const preloadedState =
  JSON.parse(localStorage.getItem('redux')) || {};

const store = createStore(
  reducer,
  preloadedState,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

function* rootSaga() {
  yield spawn(watchAddNewTodo);
  yield spawn(watchEditTodo);
  yield spawn(watchDeleteTodo);
}

sagaMiddleware.run(rootSaga);

store.subscribe(() => {
  localStorage.setItem('redux', JSON.stringify(store.getState()));
});

export const storeDispatch = store.dispatch;

export default store;
