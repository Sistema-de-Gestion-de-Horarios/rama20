import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthContextProvider } from './Componentes/store/auth-context';

ReactDOM.render(
  <AuthContextProvider>
    <App/>
  </AuthContextProvider>,
  document.getElementById('root')
);

