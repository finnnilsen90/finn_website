const React = require('react');
const ReactTestUtils = require('react-dom/test-utils');
const renderer = require('react-test-renderer')
let { shallow, mount, render } = require('enzyme');

const Box = require('../box-login.js');
const Button_two = require('../../../../lib/button-two/button-two.js');

let newBox = new Box();

describe('component connection', () => {

    it('should be defined', () => {
        expect(Box).toBeDefined();
    })

    it('for button should be defined', () => {
        expect(Button_two).toBeDefined();
    })

})  
    
describe('<Box />', () => {

    const wrapper = render(<Box />);

    it('renders components', () => {
        expect(wrapper).toMatchSnapshot();
    });

})

describe('<Button_two/>', () => {
    const Button_test = shallow(<Button_two name='Login' href='./'/>)

    it('should render props', () => {
        expect(Button_test).toMatchSnapshot(wrapper);
    })
})