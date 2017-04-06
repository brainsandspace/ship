/**
*
* Code
*
*/

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.pre`

  padding: 1rem;

  &.block {
      background: #333;
    
    code {
      color: yellow;      
    }
  }

  &.inline {
    margin: 10px;
    background: #333;
  }
`;

function Code({ children, block = false }) {
  return (
    <Wrapper className={block || children.includes('\n') ? 'block' : 'inline'}>
      <code>
        {children}
      </code>
    </Wrapper>
  );
}

Code.propTypes = {
  block: React.PropTypes.bool,
};

export default Code;
