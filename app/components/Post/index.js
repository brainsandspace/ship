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
