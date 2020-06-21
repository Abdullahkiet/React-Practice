import React from 'react';
//import logo from './logo.svg';
import './App.css';
const hello=({name}) => "Hello world" + name;

  

function App(props) {
  return (
    <div>
      Hello World by {props.name} age= {props.age-5}
      hello();
      
  
      
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
