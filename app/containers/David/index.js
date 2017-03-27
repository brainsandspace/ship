/*
 *
 * David
 *
 */

import React, { PropTypes } from "react";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import { createStructuredSelector } from "reselect";
import makeSelectDavid from "./selectors";
import styled from 'styled-components';

import Revise from 'components/Revise';
import Hypno from 'components/Hypno';
import Timeline from 'components/Timeline';

const Wrapper = styled.div`
.masthead {
  width: 100vw;
  background: #333;
  min-height: 200px;
}

h1 {
  font-family: 
}
`;


export class David extends React.Component {
  render() {
    return (
      <Wrapper>
        <Helmet
          title="David"
          meta={[{ name: "description", content: "Description of David" }]}
        />
          <Hypno></Hypno>
        <div className="masthead"></div>
          I think the first thing I ever coded was in junior high school. One of those I'll "guess"" your number just by doing a bunch of operations <Revise>and then their inverses and you'll be amazed. This is bad.</Revise>.'
          <Timeline></Timeline>
      </Wrapper>
    );
  }
}

David.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  David: makeSelectDavid()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(David);
