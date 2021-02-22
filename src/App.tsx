import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Router, Switch } from 'react-router-dom';
import './App.css';
import MainLayout from './layouts/MainLayout';
import MessengerLayout from './layouts/MessengerLayout';
import TodoRoutes from './TodoRoutes';
import history from './tools/Routing';

export default function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path={['/todos', '/todos/*']}>
            <MainLayout>
              <TodoRoutes />
            </MainLayout>
          </Route>

          <Route exact path={'/*'}>
            <MessengerLayout>
              <Route
                path={'/messenger'}
                component={() => <p>Messenger thread</p>}
              />
            </MessengerLayout>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
