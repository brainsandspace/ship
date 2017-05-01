import { injectGlobal } from 'styled-components';
import ahNatural from 'components/../fonts/ah natural.ttf';

// console.log(ahNatural);
// debugger;
injectGlobal`
  html,
  body,
  #app {
    min-height: 100%;
    min-width: 100%;
    padding: 0;
    margin: 0;
  }

  body {
    font-family: /*Ubuntu,*/ 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: /*Ubuntu,*/ 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;

    font-family: 'ah natural';
  }

  .date {
    font-family: monospace;
    color: #ccc;
  }

  p,
  label {
    line-height: 1.5em;
  }

  ul {
    margin-top: 0;
  }

  code {
    color: darkcyan;
  }

  .hot-take-alert {
    color: orange;
  }
  

`;
