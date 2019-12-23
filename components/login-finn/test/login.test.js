const React = require('react');
const ReactTestUtils = require('react-dom/test-utils');
const renderer = require('react-test-renderer')
let { shallow, mount, render } = require('enzyme');

let Background = require("../../../images/santa_cruz2015.jpg");

const Login = require('../login-finn.js');
const Box = require('../lib/box-login/box-login.js')

let LoginConst = new Login(); 

jest.mock('../lib/box-login/box-login.js', () => 'Box')

describe('component connection', () => {

    it('should be defined', () => {
        expect(Login).toBeDefined();
    })

    it('img should be defined', () => {
        expect(Background).toBeDefined();
    })

})  
   
describe('<Login />', () => {

    const wrapper = render(<Login />);

    it('renders components', () => {
        expect(wrapper).toMatchSnapshot();
    });


})
