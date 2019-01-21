import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { AppContainer } from 'react-hot-loader';
import routes from 'router';
import { create } from 'store';
import Layout from './layout';
import 'asset/style/normalize.css';

const ENV_IS_DEV = process.env.NODE_ENV === 'development';

const store = create({
  greeting: 'hello',
});

const Page = () => (
  <Provider store={ store }>
    <Layout>
      <HashRouter>
        {renderRoutes(routes)}
      </HashRouter>
    </Layout>
  </Provider>
);

ReactDOM.render(
  ENV_IS_DEV ? <AppContainer><Page /></AppContainer> : <Page />,
  document.getElementById('root')
);
