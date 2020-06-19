import React from 'react';
import'./App.css';
import Dinner from './myself.js';

function App() {
  return ( 
   <div class name="App">
     {/* <Dinner></Dinner> */}
     <Dinner myself="abdulsami" age="20 years" dishname="biryani"/>
     <hr />
     <Dinner myself="hammad" age="25" dishname="kheer" />
   </div>
  );  
}

export default App;
