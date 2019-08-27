import React, { Component } from "react";
import classes from "./App.module.css";
import Person from "./Person/Person";
import ValidationComponent from "./ValidationComponent/ValidationComponent";

class App extends Component {
  state = {
    persons: [
      { id: "asdf2", name: "Max", age: 28 },
      { id: "dff33", name: "Manu", age: 29 },
      { id: "88fief", name: "Stephanie", age: 26 }
    ],
    otherState: "some other value",
    showPersons: false,
    textArea: ""
  };

  deletePersonHandler = personIndex => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangedHandler = (event, id) => {
    // const person = this.state.persons.find();
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // const person = this.state.persons[personIndex];
    const person = {
      ...this.state.persons[personIndex]
    };

    //This is the person needing updated on the click
    person.name = event.target.value;
    //This is the copy of the state
    const persons = [...this.state.persons];
    //This is the person that needs updating per the state
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  textAreaChanger = event => {
    // const stateTextCopy = [...this.state.textArea];
    const inputText = event.target.value;
    this.setState({ textArea: inputText }, function() {
      console.log(this.state.textArea);
    });
  };

  textLengthState = () => {
    const textAreaCopy = [...this.state.textArea];
    const textAreaLength = textAreaCopy.length;
    return textAreaLength;
  };

  textLengthShort = () => {
    const stateCopyOfText = [...this.state.textArea];
    if (stateCopyOfText.length >= 5) {
      return <div>This is long enough</div>;
    } else {
      return <div>This is to short</div>;
    }
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    // JS WAY OF STYLING WITH A CONST AND PASSING TO THE JSX

    let persons = null;
    let btnClass = "";

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                // click={this.deletePersonHandler}
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      btnClass = classes.Red;
    }

    // let classes = ['red', 'bold'].join(' ');
    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(" ")}>This is really working!</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>
          Toggle Name
        </button>
        <div>
          <input type="text" onChange={event => this.textAreaChanger(event)} />

          {/* <input placeholder="This will be your text" /> */}
        </div>
        <ValidationComponent
          stateLength={this.textLengthState()}
          stateToShort={this.textLengthShort()}
          inputLength={this.state.textArea.length}
        />

        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}
//Radium() is called a higher order component
export default App;
