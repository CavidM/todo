import { useDispatch } from 'react-redux';
import React from 'react';
import TodoForm from '../form/TodoForm';
import { addNewTodo } from '../../todo.action';
import { Todo } from '../../todo.type';

const TodoCreate = () => {
  const dispatch = useDispatch();

  const onAddNewTodo = async (todo: Todo) => {
    const newTodod = await dispatch(addNewTodo(todo));

    console.log(newTodod);
  };

  return <TodoForm submitForm={onAddNewTodo} />;
};

export default TodoCreate;
