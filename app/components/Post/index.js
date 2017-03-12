/**
*
* Post
*
*/

import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: center;

.post {
  max-width: 800px;
  margin: 0 20px;
}
`;

class Post extends React.Component {
  componentWillMount() {
    this.setState({ normatives: [] });
    // TODO make this more accomodating to nested children
<<<<<<< HEAD
    console.log(this.props);
    if (Array.isArray(this.props.children[2])) {
      const innerText = this.props.children[2].props.children.reduce(
        (acc, curVal) => {
          if (typeof curVal === "string") {
            return acc + curVal;
          }
        },
        ""
      );

      console.log(innerText.match(/I should[^.]*/g));

      this.setState({ normatives: innerText.match(/I should[^.]*/g) });
=======
    const innerText = this.props.children[2].props.children.reduce((acc, curVal) => {
      if (typeof curVal === 'string') { return acc + curVal; }
    }, '');

    console.log(innerText.match(/I should[^.]*/g));

    if (innerText) {
      this.setState({ normatives: innerText.match(/I should[^.]*/g) });
    } else {
      this.setState({ normatives: [] });
>>>>>>> 2a6d1cd0d4688cd87af3a6d5aa58248416ac0e30
    }
  }

  render() {
    return (
      <Wrapper>
        <div>
          {this.state.normatives.map(statement => (
            <li key={Math.random()}>{statement.replace("I should ", "")}</li>
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
