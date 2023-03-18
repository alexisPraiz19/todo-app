import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "../sass/index.scss";

// Contextos 
import GlobalContext from '../pages/context/GlobalContext';
import ItemsLeft from '../pages/context/ItemsLeft';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalContext>
      <ItemsLeft>
        <App/>
      </ItemsLeft>
    </GlobalContext>
  </React.StrictMode>
)
