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

describe('Form component after submit', () => {
    

    it('should store success message', () => {
        const wrapper = mount(<Form />, { attachTo: document.body });
        wrapper.state().msg_status = 'success';
        wrapper.instance().form_submit();
        console.log('wrapper state => ',wrapper.state().msg_status)
        expect(wrapper.state().msg[0]).toEqual('Your order form has been successfully submitted!')
    })

    it('should store error message', () => {
        const wrapper = mount(<Form />, { attachTo: document.body });
        wrapper.state().msg_status = 'error';
        wrapper.instance().form_submit();
        console.log('wrapper state => ',wrapper.state().msg_status)
        expect(wrapper.state().msg[0]).toEqual('There was an error with your submission.')
    })

})