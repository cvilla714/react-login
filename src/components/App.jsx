import React from "react";
import Login from "./Login";

const IsLoggeIn = false;

function renderConditionally() {
  if (IsLoggeIn === true) {
    return <h1>Hello</h1>;
  } else {
    return <Login />;
  }
}

function App() {
  return <div className="container">{renderConditionally()}</div>;
}

export default App;
