const React = require('react');
const ReactTestUtils = require('react-dom/test-utils');
const renderer = require('react-test-renderer')
let { shallow, mount, render } = require('enzyme');

const Slider = require('../slider-home.js');

let newSlider = new Slider();

describe('component connection', () => {

    it('should be defined', () => {
        expect(Slider).toBeDefined();
    })

})  
    
describe('<Slider />', () => {

    const wrapper = render(<Slider />);

    it('renders components', () => {
        expect(wrapper).toMatchSnapshot();
    });


})