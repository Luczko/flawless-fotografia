import "./App.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Header from "./structure/Header/Header";

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
      </Router>
    </div>
  );
}

export default App;
