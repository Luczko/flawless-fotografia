import "./App.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Main from "./structure/Main/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalHeader from "./structure/GlobalHeader/GlobalHeader";

function App() {
  return (
    <div className='app'>
      <Router>
        <GlobalHeader activeOnlyWhenExact={true} to='/' />
        <Main />
      </Router>
    </div>
  );
}

export default App;
