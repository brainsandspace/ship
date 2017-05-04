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

import { colors } from 'global-styles';
import socrates from 'utils/socrates';

import NormativesList from 'components/NormativesList';

const Wrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
height: 100vh;

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
  background: ${colors.highlight};
}

.meta-column {
  max-width: 300px;
  overflow-y: auto;
  overflow-x: hidden;
  background: #fafafa;
  left: 0;
  border-right: 1px solid #b0b0b0;
  color: #555;
  transition: flex 0.3s;
  
}

.on-screen {
  left: 0;
  flex: 1;
}

.off-screen {
  left: -300px;
  flex: 0;
}

header {
  font-size: 3rem;
}

header button {
  cursor: pointer;
  transform: scale(1);

  &:hover {
    transform: scale(1.05)
  }

  &:focus {
    outline: 0;
  }
}

`;

const MainColumn = styled.section`
overflow-y: auto;
flex-grow: 1;
`;

const mouseEnterNormative = id => {
  document.querySelector(`#${id}`).className += ' highlight';
};

const mouseLeaveNormative = id => {
  document.querySelector(`#${id}`).className = document
    .querySelector(`#${id}`)
    .className.replace(' highlight', '');
};

/**
 * 
 * 
 * @class Post
 * @extends {Component}
 */
class Post extends Component {
  toggleMetaColumn(evt) {
    evt.preventDefault();
    this.metaColumn.className = this.metaColumn.className.match('on-screen')
      ? this.metaColumn.className.replace('on-', 'off-')
      : this.metaColumn.className.replace('off-', 'on-');
  }

  render() {
    return (
      <Wrapper>

        <section
          className="meta-column on-screen"
          ref={ref => {
            this.metaColumn = ref;
          }}
        >
          <NormativesList
            onMouseEnter={mouseEnterNormative}
            onMouseLeave={mouseLeaveNormative}
          >
            {this.props.normatives}
          </NormativesList>
        </section>

        <MainColumn>
          <header>
            <button
              onClick={evt => {
                this.toggleMetaColumn(evt);
              }}
            >
              🗒
            </button>
          </header>
          <article className="post">
            {this.props.children}
            {/*{this.state.highlightedChildren
            ? this.state.highlightedChildren
            : this.props.children}*/}
          </article>
        </MainColumn>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  normatives: state.toJS().posts.normatives,
});

Post.propTypes = { children: PropTypes.node, normatives: PropTypes.array };

export default connect(mapStateToProps)(Post);
