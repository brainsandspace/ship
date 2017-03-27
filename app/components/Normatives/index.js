/**
*
* Normatives
*
*/

import React from 'react';
// import styled from 'styled-components';
import shortid from 'shortid';

function Normatives({ text, onMouseEnter }) {
  const normativeStatements = text.match(/I should[^.]*/g);

  return normativeStatements
    ? <ul>
        {normativeStatements.map(statement => (
          <li key={shortid.generate()}
            onMouseEnter={onMouseEnter}
          >
            {statement}
          </li>
        ))}
      </ul>
    : null;
}

Normatives.propTypes = {
  text: React.PropTypes.string.isRequired,
  onMouseEnter: React.PropTypes.func.isRequired,
};

export default Normatives;
