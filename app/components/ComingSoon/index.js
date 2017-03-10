
/**
*
* ComingSoon
*
*/

import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;
text-align: center;

h1 {
  font-size: 5rem;

  span {
    vertical-align: 20%;
    font-size: 2.5rem;
  }
}
`;

class ComingSoon extends React.Component {
  render() {
    return (
      <Wrapper>
        <h1>BRAINS <span>AND</span> SPACE</h1>
        <h2>coming soon</h2>
      </Wrapper>
    );
  }
}

ComingSoon.propTypes = {};

export default ComingSoon;
