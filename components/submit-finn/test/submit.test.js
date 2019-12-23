const React = require('react');
const ReactTestUtils = require('react-dom/test-utils');
const renderer = require('react-test-renderer')
let { shallow, mount, render } = require('enzyme');

const Submit = require('../submit-finn.js');
const Form = require('../lib/form-submit/form-submit.js')

let SubmitConst = new Submit(); 

jest.mock('../lib/form-submit/form-submit.js', () => 'Form')

describe('component connection', () => {

    it('should be defined', () => {
        expect(Submit).toBeDefined();
    })

})  
   
describe('<Submit />', () => {

    const wrapper = render(<Submit />);

    it('renders components', () => {
        expect(wrapper).toMatchSnapshot();
    });


})
