import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  useHistory,
  useLocation,
  Redirect
} from 'react-router-dom';

export default function AuthExample() {
  return (
    <Router>
      <div>
        <AuthButton />
        <ul>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/private">Private Page</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/public">
            <PublicPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <PrivateRoute path="/private">
            <ProtectedPage />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  )
}

const fakeAuth = {
  isAuthenticad: false,
  authenticad(cb) {
    fakeAuth.isAuthenticad = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    fakeAuth.isAuthenticad = false;
    setTimeout(cb, 100);
  }
}

function AuthButton() {
  let history = useHistory();
  return fakeAuth.isAuthenticad ? (
    <p>
      Welcome ! {""}
      <button onClick={() => { fakeAuth.signout(() => history.push("/")) }}>Sign Out</button>
    </p>
  ) : (
      <p>You Are Not Logged In</p>
    )
}

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticad ? (
          children
        ) : (
            <Redirect to={{ pathname: "/login", state: { from: location } }}></Redirect>
          )
      }
    >
    </Route>
  )
}

function PublicPage() {
  return (
    <h3>Public</h3>
  )
}

function ProtectedPage() {
  return (
    <h3>Private</h3>
  )
}

function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    fakeAuth.authenticad(() => {
      history.replace(from);
    })
  }

  return (
    <div>
      <p>You Must Logged In Into Page at {from.pathname}</p>
      <button onClick={login}>Logged In</button>
    </div>
  )

}

//export default 
function NestingExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

function Topics() {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h2>
        Topics
      </h2>
      <ul>
        <li>
          <Link to={`${url}/Sate,Nasi goreng`}>Kuliner</Link>
        </li>
        <li>
          <Link to={`${url}/Wisata alam,Museum`}>Travelling</Link>
        </li>
        <li>
          <Link to={`${url}/Ibis,JW Mariot`}>Review Hotel</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={path}>
          <h3>Please Select a Topic</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  )
}

function Topic() {
  let { topicId } = useParams();
  return (
    <div>
      <h3>ID : {topicId}</h3>
    </div>
  )
}

//export default
function ParamsExample() {
  return (
    <Router>
      <div>
        <h2>Accounts</h2>
        <ul>
          <li>
            <Link to="/netflix">Netflix</Link>
          </li>
          <li>
            <Link to="/gmail">Gmail</Link>
          </li>
          <li>
            <Link to="/yahoo">Yahoo</Link>
          </li>
          <li>
            <Link to="/amazon">Amazon</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/:id" children={<Child />} />
        </Switch>
      </div>
    </Router>
  )
}

function Child() {
  let { id } = useParams();
  return (
    <div>
      <h3>ID : {id}</h3>
    </div>
  );
}

//export default
function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Router exact path="/">
            <Home />
          </Router>
          <Router exact path="/about">
            <About />
          </Router>
          <Router exact path="/dashboard">
            <Dashboard />
          </Router>
        </Switch>
      </div>
    </Router>
  )
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}
function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// export default App;

