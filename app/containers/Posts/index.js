/*
 *
 * Posts
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectPosts from './selectors';
import { makeSelectCurrentPost } from './selectors';
import { push } from 'react-router-redux';

import { getPost } from './actions';
import postInstances from './postInstances';

import styled from 'styled-components';
const Wrapper = styled.div`
  code {
    color: darkcyan;
  }
  ul {
    margin-top: 0;
  }
`;

const LI = styled.li`
cursor: pointer;
color: steelblue;

&:hover {
  font-weight: bold;
}
`;

export class Posts extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <Helmet
          title="Posts"
          meta={[
            { name: 'description', content: 'Description of Posts' },
          ]}
        />
        <ul>
          {
            Object.entries(postInstances).map(([slug, filename]) => (
              <LI key={slug} onClick={() => { this.props.onClickPost(filename); }} >{slug}</LI>
            ))
          }
        </ul>
        {this.props.children}
      </Wrapper>
    );
  }
}

Posts.propTypes = {
  onClickPost: PropTypes.func.isRequired,
  children: PropTypes.node,
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  // Posts: makeSelectPosts(),
  currentPost: makeSelectCurrentPost,
});

function mapDispatchToProps(dispatch) {
  return {
    onClickPost: (filename) => dispatch(getPost(dispatch, filename)), //dispatch(push(`/posts/${filename}`)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
