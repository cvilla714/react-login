import React from "react";
import Login from "./Login";

const IsLoggeIn = false;

const curretTime = new Date().getHours();
console.log(curretTime);

function App() {
  return (
    <div className="container">
      {
        // IsLoggeIn ? <h1>Hello</h1> : <Login />
        // curretTime > 12 ? <h1>Why are you still working</h1> : null
        curretTime > 12 && <h1>Why are you still working</h1>
      }
    </div>
  );
}

export default App;
