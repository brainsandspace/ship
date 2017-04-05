/**
*
* Revise
*
*/

import React from 'react';
import styled from 'styled-components';

const Highlight = styled.span`

background: coral;


&::after, &::before {
  content: '⌨';
  opacity: 0.2;
}

`;

function Revise(props) {
  return (
    <Highlight>
      {props.children}
    </Highlight>
  );
}

Revise.propTypes = {
  // children: React.PropTypes
};

export default Revise;

