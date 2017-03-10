/*
 *
 * Ideas
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectIdeas from './selectors';

export class Ideas extends React.PureComponent { 
  render() {
    return (
      <div>
        <Helmet
          title="Ideas"
          meta={[
            { name: 'description', content: 'Description of Ideas' },
          ]}
        />
      </div>
    );
  }
}

Ideas.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Ideas: makeSelectIdeas(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Ideas);
