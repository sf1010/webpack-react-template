import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import styles from './index.less';

@connect(state => ({
  greeting: state.greeting,
}))
class Home extends React.Component {
  state = {
    text: 'webpack',
  };

  render() {
    const { greeting } = this.props;
    const { text } = this.state;

    return(
      <div>
        <h1 className={styles.hello}>
          {greeting}-{text}-react!
        </h1>
        <Link to='/test'>
          go to test page
        </Link>
      </div>
    );
  }
}

export default Home;