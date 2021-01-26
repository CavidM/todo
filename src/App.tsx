import { Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainLayout from './layouts/MainLayout';
import Routes from './routes';
import history from './tools/Routing';

export default function App() {
  return (
    <div className="App">
      <Router history={history}>
        <MainLayout>
          <Routes />
        </MainLayout>
      </Router>
    </div>
  );
}
