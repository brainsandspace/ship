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
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    margin-top: 0;
    list-style: none;
    padding-left: 0;

    transition: 1s;
  }


   ul.folded {
    transition: 1s;
    grid-row-gap: 20px;
  }
  ul.unfolded {
    transition: 1s;
    grid-row-gap: 200px;
  }


`;

const LI = styled.li`
color: steelblue;
display: grid;
grid-template-columns: 1fr 1fr;
grid-column-gap: 5px;

div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

h3 {
  margin: 0;
  font-weight: normal;
}

p.date {
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: scaleX(-1);
  span {
  } 
}

h3:hover {
  cursor: pointer;
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
            { name: 'description', content: 'All the posts of posty type type post' },
          ]}
        />
        <ul className={this.props.children ? 'folded' : 'unfolded'}>
          {
            Array.from(postInstances).reverse().map(([slug, { filename, dates }]) => (
              <LI
                key={slug}
              >
                {
                  dates ?
                    <p className="date">
                      {dates.map((d) => <span key={`${filename}-${d}`}>{d.toDateString()}</span>)}
                    </p> :
                    null
                }
                <div>
                  <h3 onClick={() => { this.props.onClickPost(filename); }}>
                    {slug}
                  </h3>
                </div>
              </LI>
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
