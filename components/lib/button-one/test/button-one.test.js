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

    const wrapper = render(<Button />);

    it('renders components', () => {
        expect(wrapper).toMatchSnapshot();
    });

})

describe('<Button /> should render', () => {

    const wrapper = shallow(<Button name='Button' href='/test' type='submit' value='Login'/>);

    it('button name and href', () => {
        expect(wrapper).toMatchSnapshot();
    });

})