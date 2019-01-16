const React = require('react');
const ReactTestUtils = require('react-dom/test-utils');
const renderer = require('react-test-renderer')
let { shallow, mount, render } = require('enzyme');

const Footer = require('../footer.js');
const json = require('../../../../data_files/base_menu.json')

describe('component connection', () => {

    it('should be defined', () => {
        expect(Footer).toBeDefined();
    })

})  
    
describe('<Footer />', () => {

    const wrapper = mount(<Footer menu={json}/>);

    it('renders components', () => {
        expect(wrapper).toMatchSnapshot();
    });

})

describe('menu buttons from hamburger', () => {

    const wrapper = shallow(<Footer />);

    let links = {
                login: {
                    link: '/login',
                    className: 'link_footer',
                    text: 'Login'
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

describe('menu length', ()=> {

    const wrapper = mount(<Footer />, { attachTo: document.body });

    let test_links = {
        login: {
            link: '/login',
            className: 'link_footer',
            text: 'Login'
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
        },
        test: {
            link: '/login',
            className: 'link_footer',
            text: 'Test'
        }
    }

    let test_result = [<li className="link_footer link_footer"><a href="/login">Login</a></li>, <li className="link_footer link_footer"><a href="/home_page">Home Page</a></li>, <li className="link_footer link_footer"><a href="/resume">Resume</a></li>, <li className="link_footer link_footer"><a href="/home_page">Projects</a></li>, <li className="link_footer link_footer"><a href="/contact">Contact</a></li>]

    it('should not be greater than 5 links', () => {
        expect(wrapper.instance().links_compile(test_links)).toEqual(test_result)
    })

    let test_result_two = [<li className="link_footer link_footer"><a href="/login">Test</a></li>];

    it('should render last part', ()=> {
        expect(wrapper.instance().links_comp_two(test_links)).toEqual(test_result_two);
    })
})

describe('column two', () => {

    let test_links = {
        login: {
            link: '/login',
            className: 'link_footer',
            text: 'Login'
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
        },
        test: {
            link: '/login',
            className: 'link_footer',
            text: 'Test'
        }
    }

    const wrapper = mount(<Footer menu={test_links}/>, { attachTo: document.body });

    it('should render nav_two class', () => {
        expect(wrapper).toMatchSnapshot()
    })
})