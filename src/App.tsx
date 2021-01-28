import { Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainLayout from './layouts/MainLayout';
import Routes from './routes';
import history from './tools/Routing';
import MessengerLayout from './layouts/MessengerLayout';

export default function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route
            exact
            path={['/todos', '/todos/new', '/todos/:id/edit']}
          >
            <MainLayout>
              <Routes />
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
