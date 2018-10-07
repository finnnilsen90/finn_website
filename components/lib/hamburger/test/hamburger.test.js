const React = require('react');
const ReactTestUtils = require('react-dom/test-utils');
const renderer = require('react-test-renderer');
let { shallow, mount, render } = require('enzyme');

const Hamburger = require('../hamburger.js');

let newHamburger = new Hamburger();

describe('component connection', () => {

    it('should be defined', () => {
        expect(Hamburger).toBeDefined();
    })

}) 

describe('<Hamburger />', () => {

    const wrapper = shallow(<Hamburger />);

    it('renders components', () => {
        expect(wrapper).toBeTruthy();
    });

    it('renders an `.hamburger`', () => {
        expect(wrapper.find('#hamburger')).toHaveLength(1);
    });

});