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

import { Link } from 'react-router';

import P from 'components/P';
import Post from 'components/Post';
import PostTitle from 'components/PostTitle';
import PostDate from 'components/PostDate';
import PostHeading from 'components/PostHeading';;

import FiguringOutPosts from './instances/figuring-out-posts.js';

import styled from 'styled-components';
const Wrapper = styled.div`
  code {
    color: darkcyan;
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
        {/*<Link to='post'>Does this work?</Link>*/}
        {/*<FiguringOutPosts />*/}
        <Post>
          <PostHeading>
            <PostTitle>The Post Title Goes Here</PostTitle>
            <PostDate> 2/5/17</PostDate>
          </PostHeading>
          <P>
            Gosh darn I need ot sit down and actually figure out how it is I want to organize posts. I need to set up dynamic routing. It would probably be nice to have things set up so I can just run `npm run generate post {'{posttitle}'}` and boom new post with everything set up. Eventually a gui might be nice.
          </P>
          <P>
            I really need to decide whether <b>vim</b> is doing me good. I do like that it has made me more comfortable editing files in the terminal, which is useful when working on remote machines. The downside has been not necessarily with regards to <b>vim</b>, but rather the vim extension for <b>VS Code</b>. There are certain functionalities that it takes away from me. For instance, CTRL+D ought to highlight the next instance of the currently highlighted word, instead it looks like it decrements the indentation. Maybe that is actually a vim command? It is quite possible I just mostly need to learn more vim commands. THe problem is that vim commands are not implemented perfectly in the extension either. Like global find replace with confirmation. <code>:%s/foo/bar/gc</code> By the way, this is regarding the extension <a href="https://github.com/VSCodeVim/Vim">Vim v0.6.2</a>. I should look at the codebase and see if it might be worthwhile to try to make some PRs. I should do this.
            I souhld . I should do that.
          </P>
        </Post>
      </Wrapper>
    );
  }
}

Posts.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Posts: makeSelectPosts(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
