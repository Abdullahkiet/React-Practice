import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
 

function App(props) {
  return (
    <div>
      Hello World by {props.name} age= {props.age-5}
      <Hello firstname={props.name}></Hello>
     
      
  
      
    </div>
    
  );

  //2nd way of writting above funtion

  // function App(name,age) {
  //   return (
  //     <div>
  //       Hello World by {name} age= {age-5}
        
  //     </div>
  //   );

  //we can write funtion using arrow

  // const hello=({name}) => "Hello world" + name;
  
}

export default App;
