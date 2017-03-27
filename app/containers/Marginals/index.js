/*
 *
 * Marginals
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectMarginals from './selectors';

export class Marginals extends React.PureComponent { 
  render() {
    return (
      <div>
      </div>
    );
  }
}

Marginals.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Marginals: makeSelectMarginals(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Marginals);
