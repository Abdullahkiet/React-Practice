import React from 'react';
import './Hello.css';

function Hello({firstname}) {
  return <p className="myname">
      This text is from Hello.js made by: {firstname}
  </p>

}

export default Hello;
