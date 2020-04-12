const React = require('react');
const ReactTestUtils = require('react-dom/test-utils');
const renderer = require('react-test-renderer')
let { shallow, mount, render } = require('enzyme');

const Footer = require('../footer-home.js');

let newFooter = new Footer();

describe('component connection', () => {

    it('should be defined', () => {
        expect(Footer).toBeDefined();
    })

})  
    
describe('<Footer />', () => {

    const wrapper = render(<Footer />);

    it('renders components', () => {
        expect(wrapper).toMatchSnapshot();
    });


})

describe('link should apear', () => {
    const wrapper = render(<Footer />);
    const link = wrapper.find('.git_link');

    it('on mouse over', () => {
        expect(link).toMatchSnapshot()
    });
});