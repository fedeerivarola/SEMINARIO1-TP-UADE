import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

import './index.css';
import App from './App';

firebase.initializeApp(
  {
    apiKey: "AIzaSyA1s4mWBEUL-P7lLccedYn5X1ymcnq927U",
    authDomain: "seminario-tp.firebaseapp.com",
    databaseURL: "https://seminario-tp.firebaseio.com",
    projectId: "seminario-tp",
    storageBucket: "seminario-tp.appspot.com",
    messagingSenderId: "865969260541",
    appId: "1:865969260541:web:72c9aabfb720cedc5afb94"
  });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
