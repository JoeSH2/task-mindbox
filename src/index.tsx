import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { TodosProvider } from './app/context/TodosContext';
import './app/style/index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <TodosProvider>
      <App />
    </TodosProvider>
  </React.StrictMode>
);
