const React = require('react');
const ReactTestUtils = require('react-dom/test-utils');
const renderer = require('react-test-renderer')
let { shallow, mount, render } = require('enzyme');

const Outline = require('../outline-resume.js');

let newOutline = new Outline();

describe('component connection', () => {

    it('should be defined', () => {
        expect(Outline).toBeDefined();
    })

})  
    
describe('<Outline />', () => {

    const wrapper = render(<Outline />);

    it('renders components', () => {
        expect(wrapper).toMatchSnapshot();
    });


})