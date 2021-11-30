import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Header from './Home/Header/Header';
import Home from './Home/Home';
import ProjectDetail from './ProjectDetail/ProjectDetail';

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
    <Route path="/projectdetail/:detailId">
      <ProjectDetail></ProjectDetail>
    </Route>
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
