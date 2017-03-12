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

import Hypno from 'components/Hypno';

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
