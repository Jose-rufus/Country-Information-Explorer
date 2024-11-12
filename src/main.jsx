import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { CountryProvider } from './components/CountryContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <CountryProvider>
    <App />
  </CountryProvider>,
);
