import {DigitalClock, CountDown, StopWatch} from './components';
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import './App.css';


const App = () => {
  return (
    <Router >
      <header class="header__route">
        <Link to="/">
          <a href>Reloj</a>
        </Link>
        <Link to="/countdown">
          <a href>Cuenta Atrás</a>
        </Link>
        <Link to="/stopwatch">
          <a href>Cronómetro</a>
        </Link>
    </header>
    <main class="App">
      <Route class="clockbutton" exact path="/" component={DigitalClock} />
      <Route path="/countdown" component={CountDown} />
      <Route path="/stopwatch" component={StopWatch} />
    </main>
    </Router>
  );
}

export default App;
