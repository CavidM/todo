import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainLayout from './layouts/MainLayout';
import Routes from './routes';

function App() {
  return (
    <div className="App">
      <Router>
        <Route>
          <MainLayout>
            <Routes />
          </MainLayout>
        </Route>
      </Router>
    </div>
  );
}

export default App;
