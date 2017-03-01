/* eslint-disable linebreak-style*/
/**
*
* ComingSoon
*
*/


import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;
text-align: center;

h1 {
  font-size: 5em;
}
`
;

class ComingSoon extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <h1>BRAINS AND SPACE</h1>
        <h2>coming soon</h2>
      </Wrapper>
    );
  }
}

ComingSoon.propTypes = {

};

export default ComingSoon;
