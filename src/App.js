import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <p><Person/></p>
      </div>
    );
    //THE BELOW IS THE EXACT SAME AS WHAT THE JSX IS ABOVE (HTML)
    //THIS BELOW IS WHAT THE JSX IS CONVERTED TO IN THE BUILD
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?!'));
  }
}

export default App;
