import React from 'react';
import ReactDOM from 'react-dom/client';
import './stylesheets/book.css';
import App from './components/App';
import reportWebVitals from './files/reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
