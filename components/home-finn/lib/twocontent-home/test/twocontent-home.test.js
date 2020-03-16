const React = require('react');
const ReactTestUtils = require('react-dom/test-utils');
const renderer = require('react-test-renderer')
let { shallow, mount, render } = require('enzyme');

const Twocontent = require('../twocontent-home.js');

let newTwocontent = new Twocontent();

describe('component connection', () => {

    it('should be defined', () => {
        expect(Twocontent).toBeDefined();
    })

})  
    
describe('<Twocontent />', () => {

    const wrapper = render(<Twocontent />);

    it('renders components', () => {
        expect(wrapper).toMatchSnapshot();
    });


})