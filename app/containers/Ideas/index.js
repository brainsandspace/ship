/*
 *
 * Ideas
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import fetch from 'unfetch';
import { createStructuredSelector } from 'reselect';
import shortid from 'shortid';

import makeSelectIdeas from './selectors';

export class Ideas extends React.PureComponent {
  constructor() {
    super();
    this.state = { lists: null, cards: null };
  }

  componentDidMount() {
    // This is my ideas trello board. It is public.
    fetch('https://trello.com/b/QJBA6npM/ideas.json')
      .then(r => r.json())
      .then(json => {
        this.setState({ lists: json.lists, cards: json.cards });
      });
  }

  componentDidUpdate() {
    console.log(this.state.lists, this.state.cards);
  }

  render() {
    return (
      <div>
        <Helmet
          title="Ideas"
          meta={[{ name: 'description', content: 'Description of Ideas' }]}
        />
        <h1>Ideas</h1>
        <ul>
          TODO arrange these things in a way that makes sense. (cards as members of lists, not just all thrown out here, and then add descriptions, labels, whatever you want!)
          {this.state.cards &&
            this.state.cards.map(card => (
              <li key={shortid.generate()}>{card.name}</li>
            ))}
          {this.state.lists &&
            this.state.lists.map(list => (
              <li key={shortid.generate()}>{list.name}</li>
            ))}
        </ul>
        <p>{this.state.json}</p>
      </div>
    );
  }
}

Ideas.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Ideas: makeSelectIdeas(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Ideas);
