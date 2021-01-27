import { Actions } from './todo.constant';
import { BaseAction } from '../../tools/actionManager';
import { InitialState } from './todo.type';
import { StoreStateStatus } from '../../tools/types/StoreStateStatus';

let initialState: InitialState = {
  items: [],
  status: StoreStateStatus.idle
};

export default function todoReducer(
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
