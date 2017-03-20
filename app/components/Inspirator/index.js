/**
*
* Inspirator
*
*/

import React, { PropTypes} from 'react';
// import styled from 'styled-components';


function Inspirator({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}

Inspirator.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Inspirator;
