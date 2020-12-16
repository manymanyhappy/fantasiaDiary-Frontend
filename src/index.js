import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import {
  BrowserRouter as Router
} from 'react-router-dom';

import store from './store';
import AppContainer from '../src/containers/AppContainer/AppContainer';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <GlobalStyle />
      <AppContainer />
    </Router>
  </Provider>,
  document.getElementById('root')
);
