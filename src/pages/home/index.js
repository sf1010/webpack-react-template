import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import styles from './index.less';

@connect(({ home }) => ({
  home,
}))
class Home extends React.Component {
  state = {
    text: 'webpack',
  };

  handleTestClick = () => {
    const { dispatch } = this.props;

    dispatch({
      type: 'CREATE',
      data: {
        id: 1,
      },
    });
  };

  render() {
    const { text } = this.state;

    return (
      <div>
        <h1 className={ styles.hello }>
          { text }-react!
        </h1>
        <Link to='/test'>
          go to test page
        </Link>
        <br />
        <br />
        <button onClick={ this.handleTestClick }>click me!</button>
      </div>
    );
  }
}

export default Home;