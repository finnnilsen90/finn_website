const { configure } = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
configure({ adapter: new Adapter() });

const { JSDOM } = require('jsdom');

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');

const exposedProperties = ['window', 'navigator', 'document'];

const { window } = jsdom;

function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .reduce((result, prop) => ({
      ...result,
      [prop]: Object.getOwnPropertyDescriptor(src, prop),
    }), {});
  Object.defineProperties(target, props);
}

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};
copyProps(window, global);

// require('babel-register')();

// require('./svg_path_seg_polyfill');

// require('ignore-styles');

// var jsdom = require('jsdom').jsdom;

// var exposedProperties = ['window', 'navigator', 'document'];

// global.document = jsdom('');
// global.window = document.defaultView;

// Object.keys(document.defaultView).forEach((property) => {
//   if (typeof global[property] === 'undefined') {
//     exposedProperties.push(property);
//     global[property] = document.defaultView[property];
//   }
// });

// global.navigator = {
//   userAgent: 'node.js'
// };

// documentRef = document;