import logo from './logo.svg';
import './App.css';
import Router from './components/routes/routes';
import { pageRoutes } from './constants/routes/pageRoutes';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header />
      <Router routesArray = {pageRoutes()} />
      
    </div>
  );
}

export default App;
