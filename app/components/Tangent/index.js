/**
*
* Tangent
*
*/

import React from 'react';
import styled from 'styled-components';

import Chunk from 'components/Chunk';

const Wrapper = styled.span`
  display: inline;
`;

const SVG = styled.svg`
  width: 300%;
  position: absolute
  display: inline-block;
  height: 300%;
  overflow: scroll;

  text {
    transform: translateY(1rem);
  }
`;

function Tangent({ children }) {
  console.log('these are the children', children, children[0].props);
  return (
    <Wrapper>
      <SVG>
        <defs>
          <path
            id="MyPath"
            d="M 0 0 
             l 300 0
             c 200 0 200 0 200 200
             l 0 3000"
          />
        </defs>
        <text>
          <textPath href="#MyPath">
            {children[0].props.value}
          </textPath>
        </text>
        {/*<Chunk type={children[0].props.type}>{children[0].props.value}</Chunk>*/}
      </SVG>
      <br />
      {' '}
    </Wrapper>
  );
}

Tangent.propTypes = {};

export default Tangent;
