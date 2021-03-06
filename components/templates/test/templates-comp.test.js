const React = require('react');
const ReactTestUtils = require('react-dom/test-utils');
const renderer = require('react-test-renderer')
let { shallow, mount, render } = require('enzyme');

const VarName = require('../templates.js');
const ChildConst = require('../lib/Libcomp/Libcomp.js');

let varNameConst = new VarName(); 

describe('component connection', () => {

    it('should be defined', () => {
        expect(VarName).toBeDefined();
    })

})  
   
describe('<VarName />', () => {

    const wrapper = render(<VarName />);

    it('renders components', () => {
        expect(wrapper).toMatchSnapshot();
    });

});

describe('<VarName /> baseline parts', () => {
    const wrapper = mount(<VarName />);

    it('state fetch is defined', () => {
        expect(wrapper.state().fetch).toBeDefined()
    })

    it('state fetch is null', () => {
        expect(wrapper.state().fetch).toEqual(null)
    })

});
