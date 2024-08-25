import "./App.css";
import React from "react";
import App2 from "./App2.tsx";

function App() {
  // var a=1;
  // var a=2;
  let a=1;
  const b=3
  console.log(a+b)
  return (
    <div className="App">
      <div>App</div>
      <App2></App2>
    </div>
  );
}

export default App;
