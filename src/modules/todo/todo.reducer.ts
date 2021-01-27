import { Actions } from './constants';
import { StoreStateStatus } from '../../tools/types/StoreStateStatus';
import { BaseAction } from '../../tools/actionManager';
import { Todo } from './Todo';

export interface TodoInitialState {
  items: Todo[];
  status: StoreStateStatus;
}

let initialState: TodoInitialState = {
  items: [],
  status: StoreStateStatus.idle
};

export default function TodoReducer(
  state = initialState,
  action: BaseAction
) {
  switch (action.type) {
    case Actions.addSuccess: {
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    }
    case Actions.edit: {
      return {
        ...state,
        status: StoreStateStatus.pending
      };
    }
    case Actions.editSuccess: {
      const todo = action.payload;
      const items = state.items.map((item) => {
        if (item.id !== todo.id) {
          return item;
        }
        return todo;
      });
      return {
        ...state,
        items: items,
        status: StoreStateStatus.success
      };
    }
    case 'DELETE_TODO_SUCCESS': {
      const todo = action.payload;
      const items = state.items.filter((item) => item.id !== todo.id);

      return {
        ...state,
        items: items
      };
    }
    case Actions.changeStatus: {
      return {
        ...state,
        status: action.payload
      };
    }
    default:
      return state;
  }
}
