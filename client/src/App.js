import { Route } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing'
import NavBar from './components/NavBar';
import Cards from './components/Cards/Cards';
import ControlBar from './components/ControlBar';
import About from './components/About';
import CreateNew from './components/Create';
import DogDetail from './components/DogDetail';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Route exact path={"/"} component={Landing} />
      <Route path={["/home", "/create","/about","/dogs/:id"]} component={NavBar} />
      <Route path={"/home"} component={ControlBar} />
      <Route path={"/home"} component={Cards} />
      <Route path={"/create"} component={CreateNew} />
      <Route path={"/about"} component={About} />
      <Route path={"/dogs/:id"} component={DogDetail} />
      <Route path={["/home", "/create","/about","/dogs/:id"]} component={Footer} />
    </div>
  );
}

export default App;
