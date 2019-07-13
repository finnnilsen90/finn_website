const { configure } = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const fetchPolifill = require('whatwg-fetch')
configure({ adapter: new Adapter() });

const { JSDOM } = require('jsdom');

const file_structure = require('../site_map.json')
// console.log(Object.keys(file_structure));

function comp_html(file) {
  let final_arr = []
  let app_arr = Object.keys(file_structure.app);
  let admin_arr = Object.keys(file_structure.admin);
  let general_arr = Object.keys(file_structure.general);
  for (var i=0;i<admin_arr.length;i++) {
    app_arr.push(admin_arr[i])
  }
  for (var i=0;i<general_arr.length;i++) {
    app_arr.push(general_arr[i])
  }
  app_arr.push('compName')
  let final_string = '';

  for (var i=0;i<app_arr.length;i++) {
    final_string+=app_arr[i]+' ';
  }

  return '<!doctype html><html><body><div class="'+final_string+'"></div></body></html>'
}

const jsdom = new JSDOM(comp_html(file_structure));

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