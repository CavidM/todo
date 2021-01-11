import { useDispatch } from 'react-redux';
import React from 'react';
// import { addNewTodo } from '../../todo.slice';
import TodoForm from '../todo-form/TodoForm';
import { useHistory } from 'react-router-dom';

const TodoCreate = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onAddNewTodo = async (todo) => {
    const newTodod = await dispatch({
      type: 'ADD_NEW_TODO',
      payload: todo
    });

    console.log(newTodod);

    // if (newTodod.type === addNewTodo.fulfilled.type) {
    // history.push('/todos');
    // } else {
    // alert(newTodod.error);
    // }
  };

  return <TodoForm submitForm={onAddNewTodo} />;
};

export default TodoCreate;
