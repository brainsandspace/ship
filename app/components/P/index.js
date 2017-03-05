/**
*
* P
*
*/

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.p`
 
`;


function P(props) {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  );
}

P.propTypes = {

};

export default P;
