import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import * as firebase from 'firebase';
import App from './App';
import './index.css';

// Initialize Firebase
var config = require(`../fbconfig.js`);

const fb = firebase  
  .initializeApp(config)
  .database()
  .ref();

fb.on('value', snapshot => {  
  const store = snapshot.val();
//  debugger;
  ReactDOM.render(
    <App {...store} />,
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