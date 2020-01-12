import React from 'react';
import React, { Component } from 'react';
import Router from './components/Router';
 // import logo from './logo.svg';
import './App.css';
import Home from './screens/Home';
import Header from './component/Header';

class App extends Component {
  render() {
    return (
        <Router />
    );
  }
}
 


function App() {
  //return (
    // <Header title="Home" />
    // <Home uri="http://localhost:3000/" />
  //);
}

export default App;
