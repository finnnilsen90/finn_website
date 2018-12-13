const React = require('react');
const ReactTestUtils = require('react-dom/test-utils');
const renderer = require('react-test-renderer')
let { shallow, mount, render } = require('enzyme');

const Create_usr = require('../create_usr-finn.js');
const Form = require('../lib/form-create_usr/form-create_usr.js')

let Create_usrConst = new Create_usr(); 

jest.mock('../lib/form-create_usr/form-create_usr.js', () => 'Form')

describe('component connection', () => {

    it('should be defined', () => {
        expect(Create_usr).toBeDefined();
    })

})  
   
describe('<Create_usr />', () => {

    const wrapper = render(<Create_usr />);

    it('renders components', () => {
        expect(wrapper).toMatchSnapshot();
    });


})
