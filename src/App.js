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
import GlobalFooter from "./structure/GlobalFooter/GlobalFooter";

function App() {
  return (
    <div className='app'>
      <Router>
        <GlobalHeader activeOnlyWhenExact={true} to='/' />
        <Main />
        <GlobalFooter activeOnlyWhenExact={true} to='/' />
      </Router>
    </div>
  );
}

export default App;
