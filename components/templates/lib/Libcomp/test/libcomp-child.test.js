const React = require('react');
const ReactTestUtils = require('react-dom/test-utils');
const renderer = require('react-test-renderer')
let { shallow, mount, render } = require('enzyme');

const ChildConst = require('../Libcomp.js');

let newChildConst = new ChildConst();

describe('component connection', () => {

    it('should be defined', () => {
        expect(ChildConst).toBeDefined();
    })

})  
    
describe('<ChildConst />', () => {

    const wrapper = render(<ChildConst />);

    it('renders components', () => {
        expect(wrapper).toMatchSnapshot();
    });


})