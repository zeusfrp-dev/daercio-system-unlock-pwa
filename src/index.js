import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Limpa o Service Worker em cache para garantir atualizações
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(function(registrations) {
    for (let registration of registrations) {
      registration.unregister();
    }
  });
}


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
