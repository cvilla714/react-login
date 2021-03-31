import React from "react";
import Login from "./Login";

const IsLoggeIn = false;

function App() {
  return (
    <div className="container">{IsLoggeIn ? <h1>Hello</h1> : <Login />}</div>
  );
}

export default App;
