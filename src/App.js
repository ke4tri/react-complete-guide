import React, { Component } from "react";
import Radium from "radium";
import "./App.css";
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

  // switchNameHandler = newName => {
  //   // console.log('Was clicked!');
  //   // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 28 },
  //       { name: "Manu", age: 29 },
  //       { name: "Stephanie", age: 27 }
  //     ]
  //   });
  // };

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
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1x solid blue",
      padding: "8px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black"
      }
    };

    let persons = null;

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
          {/* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={() => this.switchNameHandler("Max!")}
            changed={this.nameChangedHandler}
          >
            My Hobbies: Racing
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          /> */}
        </div>
      );
      style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: "salmon",
        color: "black"
      };
    }

    // let classes = ['red', 'bold'].join(' ');
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(" ")}>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
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
        {/* THE BELOW BUTTON WORKS JUST LIKE THE ONE ABOVE */}
        {/* <button style={style} onClick={() => this.togglePersonsHandler()}>
          Switch Name
        </button> */}
        {/* ANOTHER OPTION BELOW FOR THE BUTTON SWITCH AND IS PREFERED*/}
        {/* <button onClick={this.switchNameHandler.bind(this, 'Maximilian')}>
          Switch Name
        </button> */}

        {/* BELOW IS A TURNARY USED TO RENDER IF SHOWPERSONS IS TRUE AND IS TOGGLED BYTHE 
        BUTTON.  THIS CAN BE DONE INSTEAD OF THE IF STATEMENT OUTSIDE OF THE RETURN */}
        {/* {
          this.state.showPersons === true ? 
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
            />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={() => this.switchNameHandler("Max!")}
              changed={this.nameChangedHandler}
            >
              My Hobbies: Racing
            </Person>
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
            />
          </div> : null
        } */}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}
//Radium() is called a higher order component
export default Radium(App);
