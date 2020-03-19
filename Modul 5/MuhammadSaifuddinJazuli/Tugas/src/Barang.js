import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import './style.css';

export default function Barang() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/ap">Access Point</Link>
          </li>
          <li>
            <Link to="/router_ap">Router</Link>
          </li>
          <li>
            <Link to="/cpu">CPU</Link>
          </li>
          <li>
            <Link to="/laptop">Laptop</Link>
          </li>
        </ul>
        <hr />

        <Switch>
          <Route path="/ap">
            <Ap />
          </Route>
          <Route path="/router_ap">
            <Router_Ap />
          </Route>
          <Route path="/cpu">
            <Cpu />
          </Route>
          <Route path="/laptop">
            <Laptop />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Ap() {

  let { path, url } = useRouteMatch();
  return (
    <div>
      <h2>Ap</h2>
      <ul>
        <li>
          <Link to={`${url}/Ap Tenda, Ap Unity, Ap D-Link`}>Availability</Link>
        </li>
        <li>
          <Link to={`${url}/Ap ZTE`}>Ready</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select an item.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
}

function Router_Ap() {

  let { path, url } = useRouteMatch();
  return (
    <div>
      <h2>Nike</h2>
      <ul>
        <li>
          <Link to={`${url}/Mikrotik RB750, Mikrotik RB760`}>Availability</Link>
        </li>
        <li>
          <Link to={`${url}/Mikrotik RB951`}>Ready</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select an item.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
}

function Cpu() {

  let { path, url } = useRouteMatch();
  return (
    <div>
      <h2>Cpu</h2>
      <ul>
        <li>
          <Link to={`${url}/CPU i5 , CPU i3`}>Availability</Link>
        </li>
        <li>
          <Link to={`${url}/CPU i7`}>Ready</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select an item.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
}

function Laptop() {

  let { path, url } = useRouteMatch();
  return (
    <div>
      <h2>Laptop</h2>
      <ul>
        <li>
          <Link to={`${url}/Laptop Macbook Retina Pro 2015, Laptop Del 2015`}>Availability</Link>
        </li>
        <li>
          <Link to={`${url}/Laptop MSI i7 Gen 8`}>Ready</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select an item.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();

  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  );
}