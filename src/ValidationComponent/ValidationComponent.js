import React from "react";
import "./ValidationComponent.css";

//ES6 Functional Component
const validation = props => {
  // TO MANAGE STATE IN FUNCTIONAL COMPONENTS YOU WILL HAVE TO USE HOOKS
  return (
    <div className="validation">
      <div>Validation Component</div>
      <div>This is the legth : {props.stateLength}</div>
      <div>This should be a message : {props.stateToShort}</div>
    </div>
  );
};

export default validation;
