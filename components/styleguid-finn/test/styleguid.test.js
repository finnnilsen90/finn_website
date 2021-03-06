const React = require('react');
const ReactTestUtils = require('react-dom/test-utils');
const renderer = require('react-test-renderer');
const jest = require('jest');
const sinon = require('sinon');
let { shallow, mount, render } = require('enzyme');

const Styleguid = require('../Styleguid-finn');

let StyleguidConst = new Styleguid(); 

describe('component connection', () => {

    it('should be defined', () => {
        expect(Styleguid).toBeDefined();
    })

})  
   
describe('<Styleguid />', () => {

    const wrapper = shallow(<Styleguid />);

    it('renders components', () => {
        expect(wrapper).toMatchSnapshot();
    });

})
