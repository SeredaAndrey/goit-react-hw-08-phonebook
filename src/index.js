import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import { Provider } from 'react-redux';

import { App } from 'components/App';
import './index.css';

import { store } from './redux/store';

import { theme } from './components/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
<<<<<<< HEAD
      {/* <BrowserRouter basename="/goit-react-hw-07-phonebook/"> */}
      <BrowserRouter>
=======
      <BrowserRouter basename="/goit-react-hw-07-phonebook/">
>>>>>>> 5e7cd8848a4459fb8595fcf85e981de55d6e7a5c
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
