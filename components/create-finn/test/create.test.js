const React = require('react');
const ReactTestUtils = require('react-dom/test-utils');
const renderer = require('react-test-renderer')
let { shallow, mount, render } = require('enzyme');

const Create = require('../create-finn.js');
const Form = require('../lib/form-create/form-create.js')

let CreateConst = new Create(); 

jest.mock('../lib/form-create/form-create.js', () => 'Form')

describe('component connection', () => {

    it('should be defined', () => {
        expect(Create).toBeDefined();
    })

})  
   
describe('<Create />', () => {

    const wrapper = render(<Create />);

    it('renders components', () => {
        expect(wrapper).toMatchSnapshot();
    });


})
