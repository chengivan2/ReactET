import React from 'react';
import logo from './logo.svg';
import './App.css';

const elementOne = React.createElement(
  'h1',
  {className: 'greeting'},
  'Ivan is Awesomer!'
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
