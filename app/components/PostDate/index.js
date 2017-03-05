/**
*
* PostDate
*
*/

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.p`
font-style: italic;
color: #bbb;
margin: 0;
text-align: right;
`;

function PostDate(props) {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  );
}

PostDate.propTypes = {
};

export default PostDate;
