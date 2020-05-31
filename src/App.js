import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import './App.css';
import Login from './components/Login/Login'
import Layout from './components/Layout/Layout'
import CreateUser from './components/CreateUser/createUser'


class App extends Component {

  state = {
    loggedIn: false
  }

  loginHandler = () => {
    this.setState({
      loggedIn: true
    })
  }

  render() {
    return (
      <Router>
        {/* {this.state.loggedIn ? <Redirect to="/home"/> : <Redirect to="/login"/>}
        <Route exact path="/home" component={Layout} /> 
        <Route exact path="/login" component={Login} /> 
        <Route exact path="/registrarse" component={CreateUser} /> */}

        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Layout} />
        <Route exact path="/registrarse" component={CreateUser} />
      </Router>
    );
  }
}

export default App;