import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Switch,
  Route,
  useHistory
} from "react-router-dom";
import { Router } from 'react-router';
import Home from "./pages/home";
import Resume from "./pages/resume";
import Contact from "./pages/contact";
import Concordia from "./pages/concordia";
import Haiexpert from "./pages/haiexpert";
import Coveat from "./pages/coveat";
import "./App.css"
import { FaCode } from "react-icons/fa";
import BlueButton from './components/customButton';

function App() {

  const history = useHistory();

  const to_home = () => history.push('/');
  const to_resume = () => history.push('/resume');
  const to_contact = () => history.push('/contactMe');

  return (
    <Router history={history}>
      <div>
        <div className="container mt-4 d-flex">
          <div className="p-2"><FaCode size={40} className="primary-color"/></div>
          <div className="ms-auto p-2"><BlueButton text="Home" onClick={to_home} className="nav_btn"/></div>
          <div className="p-2"><BlueButton text="Resume" onClick={to_resume} className="nav_btn"/></div>
          <div className="p-2"><BlueButton text="Contact me" onClick={to_contact} className="nav_btn"/></div>
        </div>

        <Switch>
          <Route path="/concordiaInternship">
            <Concordia history={history}/>
          </Route>
          <Route path="/haiexpert">
            <Haiexpert history={history}/>
          </Route>
          <Route path="/coveat">
            <Coveat history={history}/>
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/contactMe">
            <Contact />
          </Route>
          <Route exact path="/">
            <Home history={history}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
