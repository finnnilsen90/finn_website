const React = require('react');
const ReactTestUtils = require('react-dom/test-utils');
const renderer = require('react-test-renderer')
let { shallow, mount, render } = require('enzyme');

const Button = require('../button-two.js');

let newButton = new Button();

describe('component connection', () => {

    it('should be defined', () => {
        expect(Button).toBeDefined();
    })

})  
    
describe('<Button />', () => {

    const wrapper = render(<Button />);

    it('renders components', () => {
        expect(wrapper).toMatchSnapshot();
    });


})

describe('<Button /> renders', () => {

    const wrapper = shallow(<Button name='button' href='/link' type='submit' value='Login'/>);

    it('button name and href', () => {
        expect(wrapper).toMatchSnapshot();
    });


})