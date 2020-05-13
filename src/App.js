import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import './App.css';
import Login from './components/Login/Login'
import Layout from './components/Layout/Layout'
import Navbar from './components/Navbar/Navbar'

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
          {/* <Route exact path="/" component={Login} />
          <Route exact path="/home" render={() => <Layout><Home/></Layout>} />
          <Route exact path="/login" render={() => <Login login={this.loginHandler}/>} />
          {this.state.loggedIn ? <Redirect to="/home"/> : <Redirect to="/login"/> } */}
          <Route exact path="/login" component={Login} />
          <Route exact path="/home" component={Layout} />
      </Router>
    );
  }
}

export default App;