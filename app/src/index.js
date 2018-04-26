/*
 * NPM import
 */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

/*
 * Local import
 */
import App from 'src/components/App';

/*
 * Code
 */
document.addEventListener('DOMContentLoaded', () => {
  // Composant racine
  const rootComponent = <App />;
  // Noeud du DOM
  const node = document.getElementById('root');
  // Rendu
  render(rootComponent, node);
});

/*
 * Export
 */
