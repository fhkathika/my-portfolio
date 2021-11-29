import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Header from './Home/Header/Header';
import Home from './Home/Home';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header></Header>
     <Switch>
     <Route exact path="/">
      <Home></Home>
    </Route>
    <Route path="/home">
      <Home></Home>
    </Route>
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
