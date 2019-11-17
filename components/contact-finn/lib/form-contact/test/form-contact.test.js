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

describe('Email response', () => {

    const wrapper = mount(<Form />, { attachTo: document.body });
    
    it('No message sent status successful', () => {
        expect(wrapper.state().msg_sent).toBe(false);
    })
    
    it('Message sent status successful', () => {
        wrapper.instance().message();
        expect(wrapper.state().msg_sent).toBe(true);
    })

    it('Error message handeling should exist', () => {
        let message = wrapper.find('.msg_comp');
        expect(message).toMatchSnapshot();
    })
    

    it('Should throw error if failure', () => {
        let wrapper_sent = shallow(<Form />);
        wrapper_sent.instance().message(false);
        let message = wrapper_sent.find('.msg_comp');
        expect(message).toMatchSnapshot();
    })
    
})