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
                <h3>Shader Wizard <a href="https://www.shadertoy.com/user/Shane">Shane</a></h3>
            </Inspirator>
          </li>

          <li>
            <Inspirator>
              <h3>Creator of Shadertoy <a href="http://www.iquilezles.org/">Inigo Quilez</a></h3>
              <p>You might know him as <a href="https://www.shadertoy.com/user/iq">iq</a>.</p>
            </Inspirator>
          </li>
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
