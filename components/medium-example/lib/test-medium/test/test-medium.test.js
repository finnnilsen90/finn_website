const React = require('react');
const ReactTestUtils = require('react-dom/test-utils');
const renderer = require('react-test-renderer')
let { shallow, mount, render } = require('enzyme');

const Button = require('../test-medium.js');

let newTest = new Button();

describe('component connection', () => {

    it('should be defined', () => {
        expect(Button).toBeDefined();
    })

})  
    
describe('<Test />', () => {

    const wrapper = render(<Button />);

    it('renders components', () => {
        expect(wrapper).toMatchSnapshot();
    });


})

describe('<Test /> State', () => {

    // using enzyme
    it('should toggle second buttons disabled state when clicking on first button', () => {
        const wrapper = shallow(<Button />);
        const firstButton = wrapper.find('button').at(0);
        const secondButton = wrapper.find('button').at(1);
    
        firstButton.simulate('click');
        expect(wrapper.state().disabled).toEqual(true);

        console.log(wrapper.state().disabled)
    
        firstButton.simulate('click');
        expect(wrapper.state().disabled).toEqual(false);
    });


})


