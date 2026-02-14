import React from 'react';
import { createRoot } from 'react-dom/client';
import RootLayout from './src/app/layout';
import Home from './src/app/page';
import './src/styles/globals.css';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <RootLayout>
        <Home />
      </RootLayout>
    </React.StrictMode>
  );
}
