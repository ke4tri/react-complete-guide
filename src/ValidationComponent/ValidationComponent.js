import React from "react";
import Radium from "radium";
import "./ValidationComponent.css";

//ES6 Functional Component
const validation = props => {
  // TO MANAGE STATE IN FUNCTIONAL COMPONENTS YOU WILL HAVE TO USE HOOKS
  return (
    <div className="validation">
      <div>Validation Component</div>
      {props.inputLength > 5 ? <p>Text long enough</p> : <p>Test to short!</p>}
      {/* <div>This is the legth : {props.stateLength}</div>
      <div>This should be a message : {props.stateToShort}</div> */}
    </div>
  );
};

export default Radium(validation);
