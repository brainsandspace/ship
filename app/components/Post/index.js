/* eslint-disable react/no-did-mount-set-state*/

/**
*
* Post
*
*/
import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import socrates from 'utils/socrates';

import NormativesList from 'components/NormativesList';

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
  background: #fbfaa4;
}
`;

const mouseEnterNormative = id => {
  document.querySelector(`#${id}`).className += ' highlight';
};

const mouseLeaveNormative = id => {
  document.querySelector(`#${id}`).className = document
    .querySelector(`#${id}`)
    .className.replace(' highlight', '');
};

class Post extends Component {
  render() {
    return (
      <Wrapper>
        <NormativesList
          onMouseEnter={mouseEnterNormative}
          onMouseLeave={mouseLeaveNormative}
        >
          {this.props.normatives}
        </NormativesList>

        <article className="post">
          {this.props.children}
          {/*{this.state.highlightedChildren
            ? this.state.highlightedChildren
            : this.props.children}*/}
        </article>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  normatives: state.toJS().posts.normatives,
});

Post.propTypes = { children: PropTypes.node, normatives: PropTypes.array };

export default connect(mapStateToProps)(Post);
