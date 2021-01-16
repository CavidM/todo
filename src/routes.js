import { Switch, Route } from 'react-router-dom';
// import TodoCreateModal from './components/todo/TodoCreateModal';
import TodoPage from './pages/todo-page/Todo.page';
import Table2 from './modules/test/table';

export default function Routes() {
  return (
    <div>
      <Switch>
        {/* {Additional links for github page} */}
        <Route
          exact
          path={['/todos', '/todos/new', '/todos/:id/edit']}
          component={TodoPage}
        />
        <Route exact path={['/table']} component={Table2} />
      </Switch>
    </div>
  );
}
