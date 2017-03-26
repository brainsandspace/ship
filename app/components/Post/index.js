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
  margin-left: 0;
}

.post > *:not( .post-search ):not( video ), .post-search > *, .post-search input {
    margin-left: auto;
    margin-right: auto;
    max-width: 50rem;
    padding-left: 5%;
    padding-right: 5%;
}

.post-search {
  margin-left: 0;
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
      <Wrapper className="post">
        <div>
          {this.state.normatives.map(statement => (
            <li key={Math.random()}>{statement.replace('I should ', '')}</li>
          ))}
        </div>
        <article className="post">
          {this.props.children}
        </article>
      </Wrapper>
    );
  }
}

Post.propTypes = {};

export default Post;
