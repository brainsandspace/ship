/**
*
* Hypno
*
*/

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  overflow: hidden;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
  // height: 100vh;

.circle {
  position: absolute;
  height: 20vmin;
  width: 20vmin;
  border-radius: 50%;
  opacity: 1;
  background: black;
}

#c1 {
  -webkit-transform-origin: center 46%;
          transform-origin: center 46%;
  -webkit-transform: scale(0.8) rotate(0deg);
          transform: scale(0.8) rotate(0deg);
  background: #edebe9;
  -webkit-animation: circleAn1 10s infinite linear;
          animation: circleAn1 10s infinite linear;
}

@-webkit-keyframes circleAn1 {
  50% {
    background: #edede9;
  }
  to {
    background: #edebe9;
    -webkit-transform: scale(0.8) rotate(360deg);
            transform: scale(0.8) rotate(360deg);
  }
}

@keyframes circleAn1 {
  50% {
    background: #edede9;
  }
  to {
    background: #edebe9;
    -webkit-transform: scale(0.8) rotate(360deg);
            transform: scale(0.8) rotate(360deg);
  }
}
#c2 {
  -webkit-transform-origin: center 47%;
          transform-origin: center 47%;
  -webkit-transform: scale(0.8) rotate(0deg);
          transform: scale(0.8) rotate(0deg);
  background: #dcdcd4;
  -webkit-animation: circleAn2 10s infinite linear;
          animation: circleAn2 10s infinite linear;
}

@-webkit-keyframes circleAn2 {
  50% {
    background: #d8dcd4;
  }
  to {
    background: #dcdcd4;
    -webkit-transform: scale(0.8) rotate(360deg);
            transform: scale(0.8) rotate(360deg);
  }
}

@keyframes circleAn2 {
  50% {
    background: #d8dcd4;
  }
  to {
    background: #dcdcd4;
    -webkit-transform: scale(0.8) rotate(360deg);
            transform: scale(0.8) rotate(360deg);
  }
}
#c3 {
  -webkit-transform-origin: center 48%;
          transform-origin: center 48%;
  -webkit-transform: scale(0.8) rotate(0deg);
          transform: scale(0.8) rotate(0deg);
  background: #c4cabe;
  -webkit-animation: circleAn3 10s infinite linear;
          animation: circleAn3 10s infinite linear;
}

@-webkit-keyframes circleAn3 {
  50% {
    background: #becabe;
  }
  to {
    background: #c4cabe;
    -webkit-transform: scale(0.8) rotate(360deg);
            transform: scale(0.8) rotate(360deg);
  }
}

@keyframes circleAn3 {
  50% {
    background: #becabe;
  }
  to {
    background: #c4cabe;
    -webkit-transform: scale(0.8) rotate(360deg);
            transform: scale(0.8) rotate(360deg);
  }
}
#c4 {
  -webkit-transform-origin: center 49%;
          transform-origin: center 49%;
  -webkit-transform: scale(0.8) rotate(0deg);
          transform: scale(0.8) rotate(0deg);
  background: #a9b8a9;
  -webkit-animation: circleAn4 10s infinite linear;
          animation: circleAn4 10s infinite linear;
}

@-webkit-keyframes circleAn4 {
  50% {
    background: #a9b8b1;
  }
  to {
    background: #a9b8a9;
    -webkit-transform: scale(0.8) rotate(360deg);
            transform: scale(0.8) rotate(360deg);
  }
}

@keyframes circleAn4 {
  50% {
    background: #a9b8b1;
  }
  to {
    background: #a9b8a9;
    -webkit-transform: scale(0.8) rotate(360deg);
            transform: scale(0.8) rotate(360deg);
  }
}
#c5 {
  -webkit-transform-origin: center 50%;
          transform-origin: center 50%;
  -webkit-transform: scale(0.8) rotate(0deg);
          transform: scale(0.8) rotate(0deg);
  background: #93a79d;
  -webkit-animation: circleAn5 10s infinite linear;
          animation: circleAn5 10s infinite linear;
}

@-webkit-keyframes circleAn5 {
  50% {
    background: #93a7a7;
  }
  to {
    background: #93a79d;
    -webkit-transform: scale(0.8) rotate(360deg);
            transform: scale(0.8) rotate(360deg);
  }
}

@keyframes circleAn5 {
  50% {
    background: #93a7a7;
  }
  to {
    background: #93a79d;
    -webkit-transform: scale(0.8) rotate(360deg);
            transform: scale(0.8) rotate(360deg);
  }
}
#c6 {
  -webkit-transform-origin: center 51%;
          transform-origin: center 51%;
  -webkit-transform: scale(0.8) rotate(0deg);
          transform: scale(0.8) rotate(0deg);
  background: #7e9595;
  -webkit-animation: circleAn6 10s infinite linear;
          animation: circleAn6 10s infinite linear;
}

@-webkit-keyframes circleAn6 {
  50% {
    background: #7e8995;
  }
  to {
    background: #7e9595;
    -webkit-transform: scale(0.8) rotate(360deg);
            transform: scale(0.8) rotate(360deg);
  }
}

@keyframes circleAn6 {
  50% {
    background: #7e8995;
  }
  to {
    background: #7e9595;
    -webkit-transform: scale(0.8) rotate(360deg);
            transform: scale(0.8) rotate(360deg);
  }
}
#c7 {
  -webkit-transform-origin: center 52%;
          transform-origin: center 52%;
  -webkit-transform: scale(0.8) rotate(0deg);
          transform: scale(0.8) rotate(0deg);
  background: #6a7681;
  -webkit-animation: circleAn7 10s infinite linear;
          animation: circleAn7 10s infinite linear;
}

@-webkit-keyframes circleAn7 {
  50% {
    background: #6a6a81;
  }
  to {
    background: #6a7681;
    -webkit-transform: scale(0.8) rotate(360deg);
            transform: scale(0.8) rotate(360deg);
  }
}

@keyframes circleAn7 {
  50% {
    background: #6a6a81;
  }
  to {
    background: #6a7681;
    -webkit-transform: scale(0.8) rotate(360deg);
            transform: scale(0.8) rotate(360deg);
  }
}
#c8 {
  -webkit-transform-origin: center 53%;
          transform-origin: center 53%;
  -webkit-transform: scale(0.8) rotate(0deg);
          transform: scale(0.8) rotate(0deg);
  background: #58586c;
  -webkit-animation: circleAn8 10s infinite linear;
          animation: circleAn8 10s infinite linear;
}

@-webkit-keyframes circleAn8 {
  50% {
    background: #62586c;
  }
  to {
    background: #58586c;
    -webkit-transform: scale(0.8) rotate(360deg);
            transform: scale(0.8) rotate(360deg);
  }
}

@keyframes circleAn8 {
  50% {
    background: #62586c;
  }
  to {
    background: #58586c;
    -webkit-transform: scale(0.8) rotate(360deg);
            transform: scale(0.8) rotate(360deg);
  }
}
#c9 {
  -webkit-transform-origin: center 54%;
          transform-origin: center 54%;
  -webkit-transform: scale(0.8) rotate(0deg);
          transform: scale(0.8) rotate(0deg);
  background: #4e4756;
  -webkit-animation: circleAn9 10s infinite linear;
          animation: circleAn9 10s infinite linear;
}

@-webkit-keyframes circleAn9 {
  50% {
    background: #564756;
  }
  to {
    background: #4e4756;
    -webkit-transform: scale(0.8) rotate(360deg);
            transform: scale(0.8) rotate(360deg);
  }
}

@keyframes circleAn9 {
  50% {
    background: #564756;
  }
  to {
    background: #4e4756;
    -webkit-transform: scale(0.8) rotate(360deg);
            transform: scale(0.8) rotate(360deg);
  }
}
#c10 {
  -webkit-transform-origin: center 55%;
          transform-origin: center 55%;
  -webkit-transform: scale(0.8) rotate(0deg);
          transform: scale(0.8) rotate(0deg);
  background: #413541;
  -webkit-animation: circleAn10 10s infinite linear;
          animation: circleAn10 10s infinite linear;
}

@-webkit-keyframes circleAn10 {
  50% {
    background: #41353b;
  }
  to {
    background: #413541;
    -webkit-transform: scale(0.8) rotate(360deg);
            transform: scale(0.8) rotate(360deg);
  }
}

@keyframes circleAn10 {
  50% {
    background: #41353b;
  }
  to {
    background: #413541;
    -webkit-transform: scale(0.8) rotate(360deg);
            transform: scale(0.8) rotate(360deg);
  }
}
#c11 {
  -webkit-transform-origin: center 56%;
          transform-origin: center 56%;
  -webkit-transform: scale(0.8) rotate(0deg);
          transform: scale(0.8) rotate(0deg);
  background: #2b2327;
  -webkit-animation: circleAn11 10s infinite linear;
          animation: circleAn11 10s infinite linear;
}

@-webkit-keyframes circleAn11 {
  50% {
    background: #2b2323;
  }
  to {
    background: #2b2327;
    -webkit-transform: scale(0.8) rotate(360deg);
            transform: scale(0.8) rotate(360deg);
  }
}

@keyframes circleAn11 {
  50% {
    background: #2b2323;
  }
  to {
    background: #2b2327;
    -webkit-transform: scale(0.8) rotate(360deg);
            transform: scale(0.8) rotate(360deg);
  }
}
#c12 {
  -webkit-transform-origin: center 57%;
          transform-origin: center 57%;
  -webkit-transform: scale(0.8) rotate(0deg);
          transform: scale(0.8) rotate(0deg);
  background: #161212;
  -webkit-animation: circleAn12 10s infinite linear;
          animation: circleAn12 10s infinite linear;
}

@-webkit-keyframes circleAn12 {
  50% {
    background: #161412;
  }
  to {
    background: #161212;
    -webkit-transform: scale(0.8) rotate(360deg);
            transform: scale(0.8) rotate(360deg);
  }
}

@keyframes circleAn12 {
  50% {
    background: #161412;
  }
  to {
    background: #161212;
    -webkit-transform: scale(0.8) rotate(360deg);
            transform: scale(0.8) rotate(360deg);
  }
}
#c13 {
  -webkit-transform-origin: center 58%;
          transform-origin: center 58%;
  -webkit-transform: scale(0.8) rotate(0deg);
          transform: scale(0.8) rotate(0deg);
  background: black;
  -webkit-animation: circleAn13 10s infinite linear;
          animation: circleAn13 10s infinite linear;
}

@-webkit-keyframes circleAn13 {
  50% {
    background: black;
  }
  to {
    background: black;
    -webkit-transform: scale(0.8) rotate(360deg);
            transform: scale(0.8) rotate(360deg);
  }
}

@keyframes circleAn13 {
  50% {
    background: black;
  }
  to {
    background: black;
    -webkit-transform: scale(0.8) rotate(360deg);
            transform: scale(0.8) rotate(360deg);
  }
}

`;


function Hypno() {
  return (
    <Wrapper>
      <div className="circle" id="c1">
        <div className="circle" id="c2">
          <div className="circle" id="c3">
            <div className="circle" id="c4">
              <div className="circle" id="c5">
                <div className="circle" id="c6">
                  <div className="circle" id="c7">
                    <div className="circle" id="c8">
                      <div className="circle" id="c9">
                        <div className="circle" id="c10">
                          <div className="circle" id="c11">
                            <div className="circle" id="c12">
                              <div className="circle" id="c13"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

Hypno.propTypes = {

};

export default Hypno;
