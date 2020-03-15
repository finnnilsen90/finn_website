const React = require('react');
const ReactTestUtils = require('react-dom/test-utils');
const renderer = require('react-test-renderer')
let { shallow, mount, render } = require('enzyme');

const Content = require('../content-home.js');

let newContent = new Content();

describe('component connection', () => {

    it('should be defined', () => {
        expect(Content).toBeDefined();
    })

})  
    
describe('<Content />', () => {

    const wrapper = render(<Content />);

    it('renders components', () => {
        expect(wrapper).toMatchSnapshot();
    });


})