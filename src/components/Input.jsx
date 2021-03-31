import React from "react";

function Input(props) {
  return (
    <form className="form">
      <input type={props.text} placeholder={props.username} />
      <input type={props.password} placeholder={props.Password} />
      <button type={props.submit}>{props.Login}</button>
    </form>
  );
}

export default Input;
