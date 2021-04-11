import React, { Component } from 'react';
import './App.css';

import UserOutput from "./UserOutput/UserOutput";
import UserInput from "./UserInput/UserInput"

class App extends Component {
  state = {
      username: 'Patrycja'
  }

  inputChangedHandler = (event) => {
      this.setState({username: event.target.value});
  }

  render() {
    return (
      <div>
        <UserInput
            changed={this.inputChangedHandler}
            val={this.state.username}></UserInput>
        <UserOutput username={this.state.username}></UserOutput>
        <UserOutput username={this.state.username}></UserOutput>
        <UserOutput username="Ania"></UserOutput>
      </div>
    );
  }
}

export default App;
