import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import * as firebase from 'firebase';
import App from './App';
import './index.css';
// import PPTable from './PPTable.js';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCzuNzPtwsA35C7LLqG5GGaXgHFgyTpzjA",
  authDomain: "pingpong-32ba1.firebaseapp.com",
  databaseURL: "https://pingpong-32ba1.firebaseio.com",
  storageBucket: "pingpong-32ba1.appspot.com",
  messagingSenderId: "1002315054645"
};
// firebase.initializeApp(config);

const fb = firebase  
  .initializeApp(config)
  .database()
  .ref();


fb.on('value', snapshot => {  
  const store = snapshot.val();
 // const time = new Date().time;
  
  ReactDOM.render(
    <App {...store} />
     ,
    document.getElementById('root')
  );
});


// WAS THIS
  // ReactDOM.render(
  //   <App {...store} />,
  //   document.getElementById('root')
  // );

    // <Router  history={browserHistory}>
    //    <Route path="/" component={() => (<App {...store} />)} />
    //    <Route path="/table/:id" component={() => (<PPTable {...this.props.params}>XXX</PPTable>)} />
    // </Router>