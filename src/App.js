import React from 'react';
//import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div>
      Hello World by {props.name} age= {props.age-5}
      
    </div>
  );
}

export default App;
