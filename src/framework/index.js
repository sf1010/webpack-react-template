import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { AppContainer } from 'react-hot-loader';
import routes from '@/router';
import { create } from '@/store';
import '@/asset/style/normalize.css';

const ENV_IS_DEV = process.env.NODE_ENV === 'development';

const store = create({
  greeting: 'hello',
});

const Page = () => (
  <Provider store={ store }>
    <BrowserRouter>
      {renderRoutes(routes)}
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(
  ENV_IS_DEV ? <AppContainer><Page /></AppContainer> : <Page />,
  document.getElementById('root')
);
