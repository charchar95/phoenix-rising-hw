import React, { Component } from 'react';
import Daters from './components/hello.js'
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App"> 
        <div className="header">
          <h1>Hello Dating World</h1>
        </div>
        <div className="container">
          <div className="left-column">
            <Daters />
          </div>
        <div className="center-column">

        </div>
        <div className="right-column">
          <Daters />
        </div>
        </div>
      </div>
    )
  }
}
export default App;
