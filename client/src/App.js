import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Nav from './components/Nav';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/dashboard'>
            <Dashboard />
          </Route>
          <Route exact path='/signup'>
            <Signup />
          </Route>
          <Route path='/'>
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
