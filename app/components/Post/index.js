/**
*
* Post
*
*/

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: center;

.post {
  max-width: 800px;
  margin: 0 20px;
}

i::before, i::after {
  content: '*';
  color: #ddd;
  position: absolute;
  z-index: -1;
  margin-top: -0.25rem;
  margin-left: -0.3rem;
}

i::after {
}

img {
  max-width: 100%;
}
`;

class Post extends React.Component {
  componentWillMount() {
    this.setState({ normatives: [] });
    // TODO make this more accomodating to nested children
    let innerText = '';
    if (this.children && this.children[2].props.children.reduce) {
      innerText = this.props.children[2].props.children.reduce(
        (acc, curVal) => {
          if (typeof curVal === 'string') {
            return acc + curVal;
          }
        },
        ''
      );
    }
    console.log('innerText', innerText.match(/I should[^.]*/g));

    if (innerText) {
      this.setState({ normatives: innerText.match(/I should[^.]*/g) });
    } else {
      this.setState({ normatives: [] });
    }
  }

  render() {
    return (
      <Wrapper>
        <div>
          {this.state.normatives.map(statement => (
            <li key={Math.random()}>{statement.replace('I should ', '')}</li>
          ))}
        </div>
        <div className="post">
          {this.props.children}
        </div>
      </Wrapper>
    );
  }
}

Post.propTypes = {};

export default Post;
