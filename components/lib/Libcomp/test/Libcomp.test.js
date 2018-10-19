const React = require('react');
const ReactTestUtils = require('react-dom/test-utils');
const renderer = require('react-test-renderer')
let { shallow, mount, render } = require('enzyme');

const Libcomp = require('../Libcomp.js');

let newlibcompcomp = new Libcomp();

describe('component connection', () => {

    it('should be defined', () => {
        expect(Libcomp).toBeDefined();
    })

})  
    
describe('<Libcomp />', () => {

    const wrapper = render(<Libcomp />);

    it('renders components', () => {
        expect(wrapper).toMatchSnapshot();
    });


})