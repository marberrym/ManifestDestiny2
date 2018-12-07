import React, { Component } from 'react';
import './App.css';
import NavBar from './pageComponents/NavBar';
import LoginForm from './pageComponents/LoginForm'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userdata: {}
    }
  }
  render() {
    return (
      <div>
        <NavBar />
        <div className="head">
          <h1 className="manifest">MANIFEST</h1>
          <img className="logo" src="./assets/destiny2logo.png"/>
        </div>
        <LoginForm />
      </div>
    );
  }
}

export default App;
