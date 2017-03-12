/**
*
* Thought
*
*/

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.span`
color: gainsboro;

.floating {
  animation: floatAn 1s infinite;
}


@keyframes floatAn {
  to {
    color: red;
  }
}
`;


function Thought({ children }) {
  return (
    <Wrapper>
      <span className="floating">
        {children}
      </span>
    </Wrapper>
  );
}

Thought.propTypes = {

};

export default Thought;
