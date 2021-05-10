import "./App.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Header from "./structure/Header/Header";
import Main from "./structure/Main/Main";

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Main />
      </Router>
    </div>
  );
}

export default App;
