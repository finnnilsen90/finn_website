const React = require('react');
const ReactTestUtils = require('react-dom/test-utils');
const renderer = require('react-test-renderer');
const jest = require('jest');
const sinon = require('sinon');
let { shallow, mount, render } = require('enzyme');

const Libcomp = require('../libcomp-styleguid.js');

let newlibcompcomp = new Libcomp();

describe('component connection', () => {

    it('should be defined', () => {
        expect(Libcomp).toBeDefined();
    })

})  
    
describe('<Libcomp />', () => {

    const wrapper = shallow(<Libcomp />);

    it('renders components', () => {
        expect(wrapper).toMatchSnapshot();
    });

})

describe('JSON input', () => {
    const wrapper = mount(<Libcomp />);
    const json = wrapper.state().json_menu;
    const def = wrapper.state().menu;

    it('should take in JSON file', () => {
        expect(json).toEqual(def)
    })
})