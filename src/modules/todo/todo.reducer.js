import { todoActions } from './todo.constants';

const initialState = {
  items: [],
  status: 'idle'
};

export default function TodoReducer(state = initialState, action) {
  switch (action.type) {
    case todoActions.todoAddSuccess: {
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    }
    case todoActions.todoEditSuccess: {
      const todo = action.payload;
      const items = state.items.map((item) => {
        if (item.id !== todo.id) {
          return item;
        }
        return todo;
      });
      return {
        ...state,
        items: items
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
    default:
      return state;
  }
}
