import React, { Component } from 'react';
import './App.css';
import Char from './Char/Char';
import Validation from './Validation/Validation';

class App extends Component {
    state = {
        userInput: ''
    }


    outputLengthOfInput = (event) => {
        const val = event.target.value;
        const len = val.length;

        this.setState({userInput: val});
        this.setState({userInputLength: len});
    }

    deleteCharHandler = (index) => {
        const text = this.state.userInput.split('');
        text.splice(index, 1);
        const updatedText = text.join('');
        this.setState({userInput: updatedText});
    }

  render() {

      const charList = this.state.userInput.split('').map((char, index) => {
              return <Char
                  inputLetter={char}
                  key={index}
                  clicked={() => this.deleteCharHandler(index)} />;
          }
      );

    return (
      <div className="App">
        <input
            onChange={this.outputLengthOfInput}
            value={this.state.userInput}
            type="text"/>
        <p>{this.state.userInput.length}</p>
        <Validation length={this.state.userInput.length}/>
        {charList}


      </div>
    );
  }
}

export default App;
