import logo from './logo.svg';
import './App.css';
import  {Countries } from "./Countries";
import Nav from "./Nav";
import { Switch, Route, BrowserRouter} from 'react-router-dom';
import Search from "./Search";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/home" component={Countries}/>
          <Route path="/search" component={Search}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
