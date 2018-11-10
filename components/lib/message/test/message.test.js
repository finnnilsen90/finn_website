const React = require('react');
const ReactTestUtils = require('react-dom/test-utils');
const renderer = require('react-test-renderer')
let { shallow, mount, render } = require('enzyme');

const Message = require('../message.js');

let newMessage = new Message();

describe('component connection', () => {

    it('should be defined', () => {
        expect(Message).toBeDefined();
    })

})  
    
describe('<Message />', () => {

    const wrapper = render(<Message />);

    it('renders components', () => {
        expect(wrapper).toMatchSnapshot();
    });


})

describe('message state', () => {
    let msg = 'This is an error message.'
    const wrapper = mount(<Message state='error' class='test_class' message={msg}/>, { attachTo: document.body });

    
    it('mount components', () => {
        expect(wrapper).toMatchSnapshot();
    });


    it('props should make state error', () => {
        expect(wrapper.props().state).toEqual('error');
    })

      it('props should output error message', () => {
        expect(wrapper.props().message).toEqual(msg);
    })

    it('state should make error class', () => {
        expect(wrapper.find('.error')).toHaveLength(1)
    })

    it('should find class', () => {
        expect(wrapper.find('.test_class')).toHaveLength(1)
    })
})