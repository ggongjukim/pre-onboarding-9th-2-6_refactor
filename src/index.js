import React from 'react';

import ReactDOM from 'react-dom/client';

import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';

import App from './App';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </ChakraProvider>,
);
