/**
 * generator/index.js
 *
 * Exports the generators so plop knows them
 */

const fs = require('fs');
const path = require('path');
const componentGenerator = require('./component/index.js');
const containerGenerator = require('./container/index.js');
const routeGenerator = require('./route/index.js');
// const languageGenerator = require('./language/index.js');
const postGenerator = require('./post/index.js');

module.exports = (plop) => {
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('container', containerGenerator);
  plop.setGenerator('route', routeGenerator);
  // plop.setGenerator('language', languageGenerator);
  plop.setGenerator('post', postGenerator);
  plop.addHelper('directory', (comp) => {
    try {
      fs.accessSync(path.join(__dirname, `../../app/containers/${comp}`), fs.F_OK);
      return `containers/${comp}`;
    } catch (e) {
      return `components/${comp}`;
    }
  });
  plop.addHelper('curly', (object, open) => (open ? '{' : '}'));

  // the reason for not just doing new Date() and calling it a day is for human readability in the postInstances file
  plop.addHelper('creationDate', () => `${new Date().getFullYear()}, ${new Date().getMonth()}, ${new Date().getDate()}, ${new Date().getHours()}, ${new Date().getMinutes()}`);
};
