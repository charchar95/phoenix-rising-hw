import React, { Component } from 'react';
import Daters from './components/hello.js'
import './App.css';
import Form from './components/form.js'

class App extends Component {
  state = {
    users: ""
  }
  // handleAddUser = (user) => {
  //   console.log("Handle Add User - New Dater", user);
  //   const copyUser = [...this.state.user]
  //   copyUser.unshift(user);
  //   this.setState({
  //     users: copyUser
  //   })
  //   }

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
        <div className="footer">
        <Form 
        // handleAddUser={this.handhandleAddUser}
        />
      </div>
      </div>
    
    )
  }
}
export default App;
