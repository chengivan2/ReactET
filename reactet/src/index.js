import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Welcome from './componentone';
import Welcome2 from './componenttwo'
import reportWebVitals from './reportWebVitals';

const element1 =  <React.StrictMode>
                    <Welcome name="Sara" />
                  </React.StrictMode>;

const element2 =  <React.StrictMode>
                    <Welcome2 name="Ivan" />
                  </React.StrictMode>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    {element1}
    {element2}
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
