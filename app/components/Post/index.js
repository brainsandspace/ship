/* eslint-disable react/no-did-mount-set-state*/

/**
*
* Post
*
*/
import React from 'react';
import styled from 'styled-components';
import socrates from 'utils/socrates';

import Normatives from 'components/Normatives';

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

.post-body {
  width: 50rem;
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

.highlight {
  background: khaki;
}
`;

class Post extends React.Component {
  componentWillMount() {
    this.setState({ text: '' });
  }

  componentDidMount() {
    if (document.querySelector('.post-body')) {
      const innerText = document.querySelector('.post-body').innerText;

      this.setState({ text: innerText });

      console.log('socrates', socrates(innerText));
    }
  }

  mouseEnterNormative(evt) {
    console.log(evt.target.innerText);
    console.log(
      document.querySelector('.post-body').innerText.match(evt.target.innerText)
    );

    console.log(this.props.children[2].props);
    this.setState({
      highlightedChildren: [
        ...this.props.children[0],
        this.props.children[1],
        this.props.children[2],
        replaceInside(this.props.children[2]),
      ],
    });

    function replaceInside(child) {
      if (Array.isArray(child)) {
        return child.map(replaceInside);
      } else if (child.props) {
        if (Array.isArray(child.props.children)) {
          return child.props.children.map(replaceInside);
        } else if (typeof child.props.children === 'string') {
          console.log(' my child', child.props.children);
          return child.props.children.replace(
            evt.target.innerText,
            `<span class="highlight">${evt.target.innerText}</span>`
          );
        }
      } else if (typeof child === 'string') {
        console.log(' my child', child);
        return child.replace(
          evt.target.innerText,
          `<span class="highlight">${evt.target.innerText}</span>`
        );
      }

      return child;
    }
  }

  render() {
    return (
      <Wrapper className="post">

        <Normatives
          onMouseEnter={evt => {
            this.mouseEnterNormative(evt);
          }}
          text={this.state.text}
        />

        <article className="post">
          {this.state.highlightedChildren
            ? this.state.highlightedChildren
            : this.props.children}
        </article>
      </Wrapper>
    );
  }
}

Post.propTypes = { children: React.PropTypes.node };

export default Post;
