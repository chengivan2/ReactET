import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Welcome from './componentone';
import reportWebVitals from './reportWebVitals';

const element = <React.StrictMode>
                  <Welcome name="Sara" />
                </React.StrictMode>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    {element}
  </div>
);

const root2 = ReactDOM.createRoot(document.getElementsByClassName('id'));

root2.render(element);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
