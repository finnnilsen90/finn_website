const React = require('react');
const ReactTestUtils = require('react-dom/test-utils');
const renderer = require('react-test-renderer')
let { shallow, mount, render } = require('enzyme');

const Twocontent = require('../twocontent-home.js');
const Slider = require('../../slider-home/slider-home.js');
const Button = require('../../../../lib/button-one/button-one.js');

let newTwocontent = new Twocontent();

describe('component connection', () => {

    it('should be defined', () => {
        expect(Twocontent).toBeDefined();
    });

    it('slider should be defined', () => {
        expect(Slider).toBeDefined();
    });

    it('button should be defined', () => {
        expect(Button).toBeDefined();
    });

});  
    
describe('<Twocontent />', () => {

    const wrapper = render(<Twocontent />);

    it('renders components', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('button should say Resume', () => {
        expect(wrapper.find('.resume_btn')).toMatchSnapshot()
    })


})