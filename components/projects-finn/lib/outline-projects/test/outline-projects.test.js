const React = require('react');
const ReactTestUtils = require('react-dom/test-utils');
const renderer = require('react-test-renderer')
let { shallow, mount, render } = require('enzyme');

const Outline = require('../outline-projects.js');
const Dropdown = require('../../../../lib/content-dropdown/content-dropdown.js');
let newOutline = new Outline();

describe('component connection', () => {

    it('should be defined', () => {
        expect(Outline).toBeDefined();
    })

    it('dropdown should be defined', () => {
        expect(Dropdown).toBeDefined()
    })

})  
    
describe('<Outline />', () => {

    const wrapper = render(<Outline />);

    it('renders components', () => {
        expect(wrapper).toMatchSnapshot();
    });


})