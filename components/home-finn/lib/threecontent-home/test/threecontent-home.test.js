const React = require('react');
const ReactTestUtils = require('react-dom/test-utils');
const renderer = require('react-test-renderer')
let { shallow, mount, render } = require('enzyme');

const Threecontent = require('../threecontent-home.js');

let newThreecontent = new Threecontent();

describe('component connection', () => {

    it('should be defined', () => {
        expect(Threecontent).toBeDefined();
    });


})  
    
describe('<Threecontent />', () => {

    const wrapper = render(<Threecontent />);

    it('renders components', () => {
        expect(wrapper).toMatchSnapshot();
    });


})