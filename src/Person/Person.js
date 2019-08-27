import React from "react";
import Radium from "radium";
import "./Person.css";

//ES6 Functional Component
const person = props => {
  const style = {
    "@media (min-width: 500px)": {
      width: "450px"
    }
  };
  // TO MANAGE STATE IN FUNCTIONAL COMPONENTS YOU WILL HAVE TO USE HOOKS
  return (
    <div className="Person" style={style}>
      <p onClick={props.click}>
        I'm {props.name} a Person and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      {/* <p>I'm {props.name} a Person and I am {Math.floor(Math.random() * 30)} years old!</p> */}
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Radium(person);
