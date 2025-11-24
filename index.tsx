import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './src/index.css';
import { registerServiceWorker, setupPWAInstallPrompt } from './utils/pwa';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Register service worker for PWA functionality
if (import.meta.env && import.meta.env.PROD) {
  registerServiceWorker()
    .then(() => console.log('[PWA] Service worker registered successfully'))
    .catch((err) => console.error('[PWA] Service worker registration failed:', err));
  
  // Setup PWA install prompt
  setupPWAInstallPrompt();
}