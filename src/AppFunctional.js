import React, { useState } from "react";
import Person from "./Person/Person";
import "./App.css";

// ALL OF THIS BELOW IS THE SAME AS THE APP.JS BUT JUST USING FUNCTIONAL COMPONENT
// WORKING WITH STATE IS DIFFERENT WHEN USING THE useState
const app = props => {
  // class App extends Component {

  // render() {

  // ARRAY DESTRUCTORING
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Wayne", age: "28" },
      { name: "Terry", age: "34" },
      { name: "Jimmy", age: "17" }
    ],
    otherState: "some other value"
  });

  const switchNameHandler = () => {
    //DONT SET STATE LIKE THIS
    // this.state.persons[0].name = "Max";
    setPersonsState({
      persons: [
        { name: "Bobby", age: "100" },
        { name: "JJ", age: "300" },
        { name: "Taco Man", age: "200" }
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
        click={switchNameHandler}
      >
        This is something
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
  //THE BELOW IS THE EXACT SAME AS WHAT THE JSX IS ABOVE (HTML)
  //THIS BELOW IS WHAT THE JSX IS CONVERTED TO IN THE BUILD
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?!'));
  // } LEFT IS APART OF THE RENDER METHOD ABOVE
};

export default app;
// export default App;

// THIS IS USING STATE IN COMPENT AND NOT THE HOOKS WAY OF STATE WITH FUCTIONAL COMPONENT AT THE TOP
// state = {
//   persons: [
//     { name: 'Wayne', age: "28"},
//     { name: 'Terry', age: "34"},
//     { name: 'Jimmy', age: "17"}
//   ],
//   otherState: 'some other value'
// }

// switchNameHandler = () => {
//  //DONT SET STATE LIKE THIS
//  // this.state.persons[0].name = "Max";
//  this.setState({
//    persons: [
//      { name: 'Bobby', age: "100"},
//      { name: 'JJ', age: "300"},
//      { name: 'Taco Man', age: "200"}
//    ]
//  })
// }
