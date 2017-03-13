/**
*
* Timeline
*
*/

import React from 'react';
// import styled from 'styled-components';

import * as d3 from 'd3';

const timelineData = [10, 50, 100]

class Timeline extends React.Component { 
  
  
  componentDidMount() {
    const circle = d3.selectAll('circle');
    circle.style('fill', 'steelblue');
  }

  render() {
    return (
      <div>
        <svg width="1000" height="200">
          <circle cx="40" cy="60" r="10"></circle>
          <circle cx="70" cy="60" r="10"></circle>
          <circle cx="100" cy="60" r="10"></circle>
          <line x1="0" x2="200" y1="150" y2="150" />
        </svg>
      </div>
    );
  }
}

Timeline.propTypes = {

};

export default Timeline;
