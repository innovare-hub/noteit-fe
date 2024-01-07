import App from './App';
import React from 'react';
import 'extended-normalize.css';
import './assets/sass/style.scss';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from '@contexts/AuthProvider';

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
