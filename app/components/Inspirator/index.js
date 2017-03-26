/**
*
* Inspirator
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
h3 {
  display: inline;
}
`;

function Inspirator({ children }) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}

Inspirator.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Inspirator;
