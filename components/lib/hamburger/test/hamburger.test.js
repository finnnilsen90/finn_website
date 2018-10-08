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

    const wrapper = render(<Hamburger />);

    it('renders components', () => {
        expect(wrapper).toBeTruthy();
    });

    it('renders an `.hamburger`', () => {
        expect(wrapper.find('.hamburger')).toHaveLength(1);
    });

});

describe('<Hamburger /> state', () => {

    it('should have green lines', () => {
        const wrapper = shallow(<Hamburger />);
        const hamburger = wrapper.find('.hamburger');

        hamburger.simulate('onmouseenter');
        expect(hamburger).toMatchSnapshot();
    })

});