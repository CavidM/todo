import { useDispatch } from 'react-redux';
// import { storeDispatch as d } from '../../store';
import { todoActions } from './todo.constants';
import createAction from '../../tools/actionManager';

/*class TodoAction extends Action {
  constructor() {
    super();
  }

  public addNewTodo() {
    return this.createAction({

    })
  }
}*/

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

export function editTodo(todo) {
  return createAction(todoActions.todoEdit, todo);
}

export function editTodoSuccess(todo) {
  return {
    type: todoActions.todoEditSuccess,
    payload: todo
  };
}
