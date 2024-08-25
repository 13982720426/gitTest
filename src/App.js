import './App.css';
import React from 'react';
// import App2 from "./App2.tsx";
import App2 from './App2.tsx';

function App() {
  // var a=1;
  // var a=2;
  let a = 1;
  const b = 3;
  console.log(a + b);

  const fn = (c) => {
    const arr = [1, 2, 3];
    arr.forEach((item) => {
      console.log(item);
    });
    console.log(a + b, c);
  };
  fn(3);
  // const fn=(c)=>{
  //   console.log(a+b,c);
  // }
  // fn(3)

  return (
    <div className='App'>
      <div> App</div>
      <div>123</div>
      <App2></App2>
    </div>
  );
}

export default App;
