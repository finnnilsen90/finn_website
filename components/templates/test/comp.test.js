const React = require('react');
const ReactTestUtils = require('react-dom/test-utils');
const renderer = require('react-test-renderer')
let { shallow, mount, render } = require('enzyme');

const VarName = require('../compName.js');
const ChildConst = require('../lib/child/child.js')

let varNameConst = new VarName(); 

jest.mock('../lib/child/child.js', () => 'ChildConst')

describe('component connection', () => {

    it('should be defined', () => {
        expect(VarName).toBeDefined();
    })

})  
   
describe('<VarName />', () => {

    const wrapper = render(<VarName />);

    it('renders components', () => {
        expect(wrapper).toBeTruthy();
    });


})
