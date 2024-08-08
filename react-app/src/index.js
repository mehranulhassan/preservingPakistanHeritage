import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//import { AuthProvider } from './components/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';

import reportWebVitals from './reportWebVitals';
import ShopContextProvider from './components/context/context';
const theme = {
  '$primary': '#3498db',
  '$secondary': '#2ecc71',
  '$success': '#28a745',
  '$info': '#17a2b8',
  '$warning': '#ffc107',
  '$danger': '#dc3545',
  '$light': '#f8f9fa',
  '$dark': '#343a40'
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

   
    <ShopContextProvider>
        <App />
        </ShopContextProvider> 
    
  
  
    
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
