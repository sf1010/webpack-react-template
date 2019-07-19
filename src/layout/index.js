import React from 'react';
import { renderRoutes } from 'react-router-config';

export default class Layout extends React.Component {
  render() {
    const { route } = this.props;
    return (
      <React.Fragment>
        { renderRoutes(route.routes) }
      </React.Fragment>
    );
  }
}
