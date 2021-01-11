import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import uuidv4 from '../../tools/uuid';
import { saveTodoApi, deleteTodoApi, editTodoApi } from './todo.api';

const initialState = {
  items: [],
  status: 'idle'
};

export const addNewTodo = createAsyncThunk(
  'todos/add',
  async (todo) => {
    todo.id = uuidv4();
    await saveTodoApi(todo);
    return todo;
  }
);

export const deleteTodo = createAsyncThunk(
  'todos/delete',
  async (todo) => {
    await deleteTodoApi();
    return todo;
  }
);

export const editTodo = createAsyncThunk(
  'todos/edit',
  async (todo) => {
    await editTodoApi(todo);
    return todo;
  }
);

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: {
    [addNewTodo.pending]: (state, action) => {
      state.status = action.meta.requestStatus;
    },
    [addNewTodo.fulfilled]: (state, action) => {
      console.log(action);
      state.items.push(action.payload);
      state.status = action.meta.requestStatus;
    },
    [addNewTodo.rejected]: (state, action) => {
      console.log(action);
      state.status = action.meta.requestStatus;
    },
    [deleteTodo.fulfilled]: (state, action) => {
      state.items = state.items.filter(
        (todo) => todo.title !== action.payload.title
      );
    },
    [editTodo.fulfilled]: (state, action) => {
      console.log(action);
      state.items = state.items.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }

        return action.payload;
      });
    }
  }
});

console.log(todosSlice.actions);

// export const { todoAdded } = todosSlice.actions;
export default todosSlice.reducer;
