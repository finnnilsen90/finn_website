const React = require('react');
const ReactTestUtils = require('react-dom/test-utils');
const renderer = require('react-test-renderer');
let { shallow, mount, render } = require('enzyme');

const Hamburger = require('../hamburger.js');

let newHamburger = new Hamburger();

describe('component connection', () => {

    it('should be defined', () => {
        expect(Hamburger).toBeDefined();
    })

}) 

describe('<Hamburger />', () => {

    const wrapper = render(<Hamburger />);

    it('renders components', () => {
        expect(wrapper).toBeTruthy();
    });

    it('renders an `.hamburger`', () => {
        expect(wrapper.find('.hamburger')).toHaveLength(1);
    });

});

describe('<Hamburger /> state', () => {

    it('should have green lines', () => {
        const wrapper = shallow(<Hamburger />);
        const hamburger = wrapper.find('.hamburger');

        hamburger.simulate('onmouseenter');
        expect(hamburger).toMatchSnapshot();

        hamburger.simulate('onmouseleave');
        expect(hamburger).toMatchSnapshot();

        hamburger.simulate('onclick');
        expect(hamburger).toMatchSnapshot();
    })

});


describe('<Hamburger /> dropdown state', () => {

    it('dropdown should content', () => {
        const wrapper = shallow(<Hamburger />);
        const hamburger = wrapper.find('.hamburger');
        const dropdown = wrapper.find('.dropdown');

        let links = wrapper.state().links;
        let toggle = wrapper.state().toggle;

        let links_expected = {
            login: {
                link: '/login',
                className: 'link',
                text: 'Login'
            },
            home_page: {
                link: '/home_page',
                className: 'link',
                text: 'Home Page'
            },
            resume: {
                link: '/resume',
                className: 'link',
                text: 'Resume'
            },
            projects: {
                link: '/home_page',
                className: 'link',
                text: 'Projects'
            },
            contact: {
                link: '/contact',
                className: 'link',
                text: 'Contact'
            }
        }

        let html =  [<li className="link" href="/login">Login</li>, <li className="link" href="/home_page">Home Page</li>, <li className="link" href="/resume">Resume</li>, <li className="link" href="/home_page"
>Projects</li>, <li className="link" href="/contact">Contact</li>]

        expect(links).toEqual(links_expected);

        expect(newHamburger.links_compile(links)).toEqual(html);

        hamburger.simulate('onclick');
        expect(dropdown).toMatchSnapshot();
    })

});