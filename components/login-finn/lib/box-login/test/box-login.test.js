const React = require('react');
const ReactTestUtils = require('react-dom/test-utils');
const renderer = require('react-test-renderer')
let { shallow, mount, render } = require('enzyme');

const Box = require('../box-login.js');
const Button_one = require('../../../../lib/button-one/button-one.js');

let newBox = new Box();

describe('component connection', () => {

    it('should be defined', () => {
        expect(Box).toBeDefined();
    })

    it('for button should be defined', () => {
        expect(Button_one).toBeDefined();
    })

})  
    
describe('<Box />', () => {

    const wrapper = render(<Box />, { attachTo: document.body });

    it('renders components', () => {
        expect(wrapper).toMatchSnapshot();
    });

})

describe('<Button_two/>', () => {
    const Button_test = shallow(<Button_one name='Login' href='./' type='submit' value='Login'/>, { attachTo: document.body })

    it('should render props', () => {
        expect(Button_test).toMatchSnapshot();
    })
})

describe('Login functionality', () => {

    const Login = render(<Box />, { attachTo: document.body })
    const input_user = Login.find('.input_user')
    const input_pass = Login.find('.input_pass')

    it('should submit username', () => {
        expect(input_user.length).toBe(1);
    })

    it('should submit pass', () => {
        expect(input_pass.length).toBe(1);
    })
})

describe('Login error reporting', () => {

    it('should throw error if blank', () => {
        expect().toBeDefined()
    })

}