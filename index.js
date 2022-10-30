import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './components/Header';
const root = ReactDOM.createRoot(document.getElementById('root'));
const header=ReactDOM.createRoot(document.getElementById("bodyHeader"))
header.render(<Header name="Unknown"/>)
root.render(
  <React.StrictMode>
  <App />
  </React.StrictMode>
  );