import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
// import TodoCreateModal from './components/todo/TodoCreateModal';
import TodoPage from './pages/todo-page/Todo.page';

export default function Routes() {
  return (
    // <Router>
      <div>
        <Switch>
          {/* {Additional links for github page} */}
          <Route
            exact
            path={['/todos', '/todos/new', '/todos/:id/edit']}
            component={TodoPage}
          />
        </Switch>
      </div>
    // </Router>
  );
}
