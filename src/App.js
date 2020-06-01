import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import './App.css';
import Login from './components/Login/Login'
import Layout from './components/Layout/Layout'
import CreateUser from './components/CreateUser/createUser'
import { firebaseAuth } from './services/firebase/config'

function PrivateRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
    />
  )
}

function PublicRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to={'/home'} />}
    />
  )
}

class App extends Component {
  state = {
    authed: false,
    loading: true,
    user: null
  }
  componentDidMount() {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
          user: user
        })
      } else {
        this.setState({
          authed: false,
          loading: false,
          user: null
        })
      }
    })
  }
  componentWillUnmount() {
    this.removeListener()
  }

  render() {
<<<<<<< HEAD
    console.log(this.state)

    return this.state.loading === true ? <h1>Loading</h1> : (
      <Router>
        {/* <Route exact path="/" component={Login} />
          <Route exact path="/home" render={() => <Layout><Home/></Layout>} />
          <Route exact path="/login" render={() => <Login login={this.loginHandler}/>} />*/}
        <PublicRoute authed={this.state.authed} path='/login' component={Login} />
        <PublicRoute authed={this.state.authed} path='/register' component={CreateUser} />
        <PrivateRoute authed={this.state.authed} path='/home' component={Layout}/>
=======
    return (
      <Router>
        {/* {this.state.loggedIn ? <Redirect to="/home"/> : <Redirect to="/login"/>}
        <Route exact path="/home" component={Layout} /> 
        <Route exact path="/login" component={Login} /> 
        <Route exact path="/registrarse" component={CreateUser} /> */}

        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Layout} />
        <Route exact path="/registrarse" component={CreateUser} />
>>>>>>> master
      </Router>
    );
  }
}

export default App;