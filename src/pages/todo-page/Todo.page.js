import { Link, Route } from 'react-router-dom';
import {
  // TodoCreateModal,
  TodoList,
  TodoEditModal
} from '../../modules/todo';
import styles from './TodoPage.module.css';
import TodoCreateModalLazy from '../../modules/todo/views/todo-create/TodoCreateModal.lazy';

function TodoView() {
  return (
    <>
      <div className={styles['todo-list']}>
        <TodoList />
      </div>
      <Link
        to="/todos/new"
        className={`btn btn-outline-secondary ${styles['add-new-todo-button']}`}
      >
        Add new todo
      </Link>
      <Route
        exact
        path="/todos/new"
        component={TodoCreateModalLazy}
      />
      <Route exact path="/todos/:id/edit" component={TodoEditModal} />
    </>
  );
}

export default TodoView;
