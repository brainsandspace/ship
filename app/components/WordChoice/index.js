/**
*
* WordChoice
*
*/

import React from 'react';
import styled from 'styled-components';

import Chunk from 'components/Chunk';

const Wrapper = styled.span`
background: lightblue;

&::after {
  content: 'wc';
  color: #999
  font-size: 1rem;
  display: inline-block;
  transform: scale(0.65) rotate(90deg);
}
`;

function WordChoice({ children }) {
  // if (!children) return null;
  console.log('in word choice', children.value);
  return (
    <Wrapper>
      {/*//THIS IS LAZXZY*/}
      {Array.isArray(children)
        ? <Chunk type={children[0].props.type}>{children[0].props.children}</Chunk>
        : <Chunk type={children.props.type}>{children.props.children}</Chunk>}
    </Wrapper>
  );
}

WordChoice.propTypes = {};

export default WordChoice;
