import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import './App.css';
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import Layout from './components/Layout/Layout'

class App extends Component {

  state = {
    loggedIn: false
  }

  loginHandler = () => {
    this.setState({
      loggedIn: true
    })
  }

  render () {
    return(
      <Router>
          <Route exact path="/home" render={() => <Layout><Home/></Layout>} />
          <Route exact path="/login" render={() => <Login login={this.loginHandler}/>} />
          {this.state.loggedIn ? <Redirect to="/home"/> : <Redirect to="/login"/> }
      </Router>
    );
  }
}

export default App;