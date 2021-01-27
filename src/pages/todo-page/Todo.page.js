import { Link, Route } from 'react-router-dom';
import styles from './TodoPage.module.css';
import TodoCreateModalLazy from '../../modules/todo/views/create/TodoCreateModal.lazy.tsx';
import TodoEditModal from '../../modules/todo/views/edit/TodoEditModal.tsx';
import TodoList from '../../modules/todo/views/list/TodoList';
// import TodoCreateModalLazy from '../../modules/todo/views/create/TodoCreateModal.lazy';

function TodoView() {
  return (
    <>
      <div className={styles['list']}>
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
