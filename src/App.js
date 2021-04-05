import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Home/Home';
import Admin from './components/Admin/Admin';
import Login from './components/Login/Login';
import Order from './components/Order/Order';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      
      <Link to="/"className="navbar-brand text-danger fw-bold">Electro</Link>
      <div className="container">
        <nav className="navbar navbar-expand-lg mb-4">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin">Admin</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/order">Order</Link>
            </li>
            <li className="nav-item">
              {
                loggedInUser.email ? <Link className="nav-link text-success" to="/">{loggedInUser.name}</Link> : <Link className="nav-link" to="/login">Login</Link>
              }
            </li>
          </ul>
        </nav>

        <Switch>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <PrivateRoute path="/order">
            <Order />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
