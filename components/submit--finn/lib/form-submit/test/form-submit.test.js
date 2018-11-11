const React = require('react');
const ReactTestUtils = require('react-dom/test-utils');
const renderer = require('react-test-renderer')
let { shallow, mount, render } = require('enzyme');

const Form = require('../form-submit.js');

let newForm = new Form();

describe('component connection', () => {

    it('should be defined', () => {
        expect(Form).toBeDefined();
    })

})  
    
describe('<Form />', () => {

    const wrapper = render(<Form />);

    it('renders components', () => {
        expect(wrapper).toMatchSnapshot();
    });


})