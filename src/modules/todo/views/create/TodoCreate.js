import { useDispatch } from 'react-redux';
import React from 'react';
import TodoForm from '../form/TodoForm';
import { useHistory } from 'react-router-dom';
import { addNewTodo } from '../../actions.ts';

const TodoCreate = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onAddNewTodo = async (todo) => {
    const newTodod = await dispatch(addNewTodo(todo));

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
