const { configure } = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const fetchPolifill = require('whatwg-fetch')
configure({ adapter: new Adapter() });

const { JSDOM } = require('jsdom');

const file_structure = require('../site_map.json')
console.log(file_structure);

function comp_html() {
  let class_val = 'compName'
  
  return '<!doctype html><html><body><div class='+class_val+'></div></body></html>'
}

const jsdom = new JSDOM(comp_html());

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
global.fetch = fetchPolifill.fetch
global.Request = fetchPolifill.Request
global.Headers = fetchPolifill.Headers
global.Response = fetchPolifill.Response
copyProps(window, global);