/*
 *
 * Inspirators
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import Inspirator from 'components/Inspirator';
import styled from 'styled-components';

import makeSelectInspirators from './selectors';

const Wrapper = styled.div`
h1 {
  text-align: center;
}
`;

export class Inspirators extends React.PureComponent {
  componentDidMount() {
    document.designMode = 'off';
  }

  render() {
    return (
      <Wrapper>
        <Helmet
          title="Inspirators"
          meta={[
            { name: 'description', content: 'Description of Inspirators' },
          ]}
        />

        <h1>I am inspired by people. These are some of those people.</h1>
        <ul>

          <li>
            <Inspirator>
              <h3>
                Creator of Shadertoy
                {' '}
                <a href="http://www.iquilezles.org/">Inigo Quilez</a>
              </h3>
              <p>
                You might know him as
                <a href="https://www.shadertoy.com/user/iq">iq</a>
                .
              </p>
            </Inspirator>
          </li>

          <li>
            <Inspirator>
              <h3>
                Nadieh Bremer aka
                {' '}
                <a href="https://www.visualcinnamon.com/">Visual Cinammon</a>
              </h3>
              <p>She makes awesome data visualizations.</p>
            </Inspirator>
          </li>

          <li>
            <Inspirator>
              <h3>
                <a href="http://sxywu.com/">Shirley Wu</a>
              </h3>
              <p>
                She also makes awesome data visualizations. Sometimse she works with Nadieh.
              </p>
            </Inspirator>
          </li>

          <li>
            <Inspirator>
              <h3>
                <a href="https://aerotwist.com/">Paul Lewis</a>
              </h3>
              <p>
                I found myself on his site
                {' '}
                <a href="https://aerotwist.com/">Aerotwist</a>
                {' '}
                all the time when I was starting out. He's great at explaining things.
              </p>
            </Inspirator>
          </li>

          <li>
            <Inspirator>
              <h3>
                <a href="http://jamie-wong.com/">Jamie Wong</a>
              </h3>
              <p>
                He makes cool things and explains in detail about how he made them. Great writer/explainer.
              </p>
            </Inspirator>
          </li>

          <li>
            <Inspirator>
              <h3>
                Shader Wizard
                {' '}
                <a href="https://www.shadertoy.com/user/Shane">Shane</a>
              </h3>
            </Inspirator>
          </li>

          <li>
            <Inspirator>
              <h3>
                Davatron 5000 aka
                {' '}
                <a href="http://daverupert.com/">Dave Rupert</a>
              </h3>
              <p>
                He and Chris Coyier run a podcast
                {' '}
                <a href="http://shoptalkshow.com/">Shop Talk Show</a>
                {' '}
                where they mouthsplain the web. Dave knows a bit about everything.
              </p>
            </Inspirator>
          </li>

          <li>
            <Inspirator>
              <h3>
                <a href="https://zeit.co/">Zeit</a>
                {' '}
                founder
                {' '}
                <a href="https://rauchg.com/">Guillermo Rauch</a>
              </h3>
              <p>
                He made Hyper, the dope electron terminal.
              </p>
            </Inspirator>
          </li>
          <ul>
            Tim Holman
            Kent C Dodds
            Chris Coyier
            Max Stoiber
            Dan Abramov

            Adam Stacoviak and Jerod Santo (stickies?)

          </ul>
        </ul>
      </Wrapper>
    );
  }
}

Inspirators.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Inspirators: makeSelectInspirators(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Inspirators);
