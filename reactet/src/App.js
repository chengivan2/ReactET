import React from 'react';
import logo from './logo.svg';
import './App.css';

const elementOne = (
  <div>
    <h1>Jello, Correct World!</h1>
  </div>
);

function App() {
  if (20 > 30) {
    return <h1> Hello World!</h1>;
  }
  else {
    return elementOne;
  }
}



export default App;