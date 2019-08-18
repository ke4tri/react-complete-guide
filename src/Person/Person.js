import React from "react";

//ES6 Functional Component
const person = props => {
  // TO MANAGE STATE IN FUNCTIONAL COMPONENTS YOU WILL HAVE TO USE HOOKS
  return (
    <div>
      <p onClick={props.click}>
        I'm {props.name} a Person and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      {/* <p>I'm {props.name} a Person and I am {Math.floor(Math.random() * 30)} years old!</p> */}
    </div>
  );
};

export default person;
