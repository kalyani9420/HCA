import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
let menubar = document.querySelector('#menu-bar')

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

menubar.onclick =()=>{
    menubar.classList.toggle('fa-times')
}
reportWebVitals();
