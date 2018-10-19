const React = require('react');
const ReactTestUtils = require('react-dom/test-utils');
const renderer = require('react-test-renderer')
let { shallow, mount, render } = require('enzyme');

const Footer = require('../footer.js');

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

describe('menu buttons from hamburger', () => {

    const wrapper = shallow(<Footer />);

    let links = {
                login: {
                    link: '/logout',
                    className: 'link_footer',
                    text: 'Logout'
                },
                home_page: {
                    link: '/home_page',
                    className: 'link_footer',
                    text: 'Home Page'
                },
                resume: {
                    link: '/resume',
                    className: 'link_footer',
                    text: 'Resume'
                },
                projects: {
                    link: '/home_page',
                    className: 'link_footer',
                    text: 'Projects'
                },
                contact: {
                    link: '/contact',
                    className: 'link_footer',
                    text: 'Contact'
                }
            }

    it('shold display hamburger menu object', () =>{
        expect(links).toEqual(wrapper.state().links)
    })
})

