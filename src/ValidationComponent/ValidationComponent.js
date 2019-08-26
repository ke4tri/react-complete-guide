import React from "react";
import "./ValidationComponent.css";

//ES6 Functional Component
const validation = props => {
  // TO MANAGE STATE IN FUNCTIONAL COMPONENTS YOU WILL HAVE TO USE HOOKS
  return (
    <div className="validation">
      <p>Validation Component</p>
      <p>This is the legth {props.stateLength}</p>
    </div>
  );
};

export default validation;
