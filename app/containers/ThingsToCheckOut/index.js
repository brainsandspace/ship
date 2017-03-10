/*
 *
 * ThingsToCheckOut
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import { things } from './constants';

const Wrapper = styled.div`
h1 {
  font-size: 3rem;
  text-align: center;
}
`;

export class ThingsToCheckOut extends React.PureComponent { 
  render() {
    return (
      <Wrapper>
        <Helmet 
          title="Things to Check Out"
        />
        <h1>Things I'd like to check out if I only had more time</h1>
        <ul>
          {things.map((thing) => (
            <a href={thing.href} key={thing.href}>{thing.thing}</a>
          ))}
        </ul>
      </Wrapper>
    );
  }
}

ThingsToCheckOut.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(ThingsToCheckOut);
