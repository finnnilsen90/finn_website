const React = require('react');
const ReactTestUtils = require('react-dom/test-utils');
const renderer = require('react-test-renderer')
let { shallow, mount, render } = require('enzyme');

const Button = require('../button-one.js');

let newButton = new Button();

describe('component connection', () => {

    it('should be defined', () => {
        expect(Button).toBeDefined();
    })

})  
    
describe('<Button />', () => {

    const wrapper = render(<Button />, { attachTo: document.body });

    it('renders components', () => {
        expect(wrapper).toMatchSnapshot();
    });

})

describe('<Button /> should render', () => {

    const wrapper = shallow(<Button name='Button' href='/test' type='submit' value='Login'/>, { attachTo: document.body });

    it('button name and href', () => {
        expect(wrapper).toMatchSnapshot();
    });

})

describe('<Button /> should take in props', () => {

    const wrapper = mount(<Button width='100px' font_size='1.2em' name='Button' href='/test' type='submit' value='Login'/>, { attachTo: document.body });
    const width_prop = wrapper.props().width;
    const font_size_prop = wrapper.props().font_size;
    const height_prop_test = '43px'
    
    it('one prop sets width', () => {
        expect(width_prop).toEqual('100px');
    })

    it('one prop sets font size', () => {
        expect(font_size_prop).toEqual('1.2em');
    })

    it('calculate height', () => {
        setTimeout(() => {
            expect(height_prop_test).toEqual(wrapper.state().height);
        }, 100)
    })
    
})