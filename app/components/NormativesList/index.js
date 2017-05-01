/**
*
* Normatives
*
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DIV = styled.div`

  position: fixed;
  width: calc((100vw - 50rem));
  right: 100vw;

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    background: rgba(220, 220, 220, 0.92);
    margin-top: 5px;
    padding: 5px;

    &:nth-of-type(2n) {
      background: rgba( 240, 240, 240, 0.92);
    }
  }

  .normatives-button {
    position: absolute;
    font-size: 5rem;
  }

  .onscreen {
    transform: translateX(calc(100vw - 48rem));
    transition: transform 0.2s;
  }

  .offscreen {
    transform: translateX(0rem);
    transition: transform 0.2s;    
  }
  
`;

class NormativesList extends Component {
  static propTypes = {
    onMouseEnter: PropTypes.func.isRequired,
    onMouseLeave: PropTypes.func.isRequired,
    children: PropTypes.array,
  };

  showNormatives() {
    this.button.className = this.button.className.replace(
      'onscreen',
      'offscreen'
    );
    this.list.className = this.list.className.replace('offscreen', 'onscreen');
  }

  hideNormatives() {
    this.list.className = this.list.className.replace('onscreen', 'offscreen');
    this.button.className = this.button.className.replace(
      'offscreen',
      'onscreen'
    );
  }

  render() {
    return (
      <DIV>
        <div
          ref={ref => {
            this.button = ref;
          }}
          className="normatives-button onscreen"
          onClick={() => {
            this.showNormatives();
          }}
        >
          🗒
        </div>
        <ul
          ref={ref => {
            this.list = ref;
          }}
          className="offscreen"
          onClick={() => {
            this.hideNormatives();
          }}
        >
          {this.props.children.map(child => (
            <li
              key={child.id}
              onMouseEnter={() => {
                this.props.onMouseEnter(child.id);
              }}
              onMouseLeave={() => {
                this.props.onMouseLeave(child.id);
              }}
            >
              {child.statement}
            </li>
          ))}
        </ul>
      </DIV>
    );
  }
}

export default NormativesList;
