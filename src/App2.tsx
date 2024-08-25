import React from 'react';
import './App2.scss';
// const e = 'World';
// const f = '!';
const App2 = () => {
  // const a:any=1;
  const a = 1;
  // const b = 2;
  // const c = 3;
  // var b=2
  // let c=3
  const b = 2;
  const c = 3;
  // var b:any=2
  console.log(a + b, c);
  return (
    <div>
      App2
      <div>{a}</div>
      <div className='app2'>
        <div className='header'>header</div>
        <div className='content'>
          <div className='left'>left</div>
          <div className='right'>right</div>
        </div>
      </div>
    </div>
  );
};

export default App2;
