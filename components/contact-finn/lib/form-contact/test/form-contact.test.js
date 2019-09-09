const React = require('react');
const ReactTestUtils = require('react-dom/test-utils');
const renderer = require('react-test-renderer')
let { shallow, mount, render } = require('enzyme');

const Form = require('../form-contact.js');
const Button_one = require('../../../../lib/button-one/button-one.js');

let newForm = new Form();

describe('component connection', () => {

    it('should be defined', () => {
        expect(Form).toBeDefined();
    })

    it('button should be defined', () => {
        expect(Button_one).toBeDefined();
    })

})  
    
describe('<Form />', () => {

    const wrapper = render(<Form />);

    it('renders components', () => {
        expect(wrapper).toMatchSnapshot();
    });


})