/*
 *
 * Post
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectPost from './selectors';

export class Post extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="Post"
          meta={[
            { name: 'description', content: 'Description of Post' },
          ]}
        />
        <h1>Should there even be anythings in here? Where should /post point? How should posts be stored? Is each post its own container? component?</h1>
      </div>
    );
  }
}

Post.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Post: makeSelectPost(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
