/**
*
* Tangent
*
*/

import React from 'react';
import styled from 'styled-components';
import shortid from 'shortid';

import Chunk from 'components/Chunk';

const Wrapper = styled.span`
  display: inline;

  svg {
    width: 100%;
    position: absolute
    display: inline-block;
    height: 300%;
    overflow: scroll;

    text {
      transform: translateY(1rem);
    }
  }
`;

class Tangent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      straightLength: 300,
      id: shortid.generate(),
    };
    console.log(
      'these are the children',
      this.props.children,
      this.props.children[0].props
    );
  }

  componentDidMount() {
    console.log('bounding rect', this.svg.getBoundingClientRect());

    // TODO this is hacky-ish, could instead use a ref that is passed down down down. Actually maybe this is better
    console.log(document.querySelector('.post-body').getBoundingClientRect());

    const svgLeft = this.svg.getBoundingClientRect().left;
    const postBody = document
      .querySelector('.post-body')
      .getBoundingClientRect();

    this.setState({
      straightLength: postBody.width - (svgLeft - postBody.left),
    });
    this.forceUpdate();
  }

  render() {
    return (
      <Wrapper>
        <svg ref={ref => this.svg = ref}>
          <defs>
            <path
              id={this.state.id}
              d={
                `M 0 0 
                 l ${this.state.straightLength} 0
                 c 200 0 200 0 200 200
                 l 0 3000`
              }
            />
          </defs>
          <text>
            <textPath href={`#${this.state.id}`}>
              {this.props.children[0].props.value}
            </textPath>
          </text>
          {/*<Chunk type={children[0].props.type}>{children[0].props.value}</Chunk>*/}
        </svg>
        <br />
        {' '}
      </Wrapper>
    );
  }
}

Tangent.propTypes = {};

export default Tangent;
