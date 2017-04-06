/*
 *
 * Whoah?
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import shortid from 'shortid';

import Post from 'components/Post';
import PostP from 'components/PostP';
import PostHeading from 'components/PostHeading';
import PostTitle from 'components/PostTitle';
import PostDate from 'components/PostDate';
import Chunk from 'components/Chunk';

import postInstances from '../postInstances';

import content from './2017-04-03_whoa.whoa';


console.log(content);

export class Whoah extends React.Component {
  constructor() {
    super() 
    this.state = {}
  }

  componentWillMount() {
    // // walk tree
    // let acc = [];
    // let flavor = '';
    // const serialized = this.traverseTree(acc, content, flavor);
    // console.log(content);
    // console.log('serialized', serialized);

    // this.setState({ serialized });
  }

  // traverseTree(acc, node, flavor) {
  //   if (node.children) {
  //     const reduced = node.children.reduce(
  //       (acc2, child) => this.traverseTree(acc2, child, node.type),
  //       [],
  //     );
  //     return [...acc, ...reduced];
  //   } else {
  //     return [...acc, { flavor, ...node }];
  //   }

    // return Object.entries(node).reduce(
    //   (acc, [key, val]) =>
    //     key === 'children'
    //       ? [
    //           ...acc,
    //           ...val.map(child => {
    //             debugger;
    //             child.
    //             return this.traverseTree(child);
    //           }),
    //         ]
    //       : key === 'value' ? [...acc, val] : 'test',
    //   [],
    // );
  // }

  getElement(node) {
    return document.createElement('div');
  }

  render() {
    return (
      <Post>

        <Helmet
          title="Whoah"
          meta={[{ name: 'description', content: 'Description of Whoah?' }]}
        />

        <PostHeading>
          <PostTitle>Whoah?</PostTitle>
          <PostDate>
            {postInstances
              .get('Whoah?')
              .dates.map(date => <span key={date}>{date.toDateString()}</span>)}
          </PostDate>
        </PostHeading>

        <div className="post-body">

          {/*{this.state.serialized.map(node => <Chunk flavor={node.flavor} key={shortid.generate()}>{node.value}</Chunk>)}*/}
          <Chunk type={content.type}>{content.children}</Chunk>

          <PostP>
          </PostP>

        </div>

      </Post>
    );
  }
}

Whoah.propTypes = {};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Whoah);
