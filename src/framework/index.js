import 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from '@/router';
import { create } from '@/store';
import '@/assets/styles/normalize.css';

const store = create();

const Page = () => (
  <Provider store={ store }>
    <BrowserRouter>
      { renderRoutes(routes) }
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);
