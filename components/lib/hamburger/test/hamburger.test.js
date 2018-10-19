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

    it('should match state of each action', () => {
        const wrapper = shallow(<Hamburger />);
        const hamburger = wrapper.find('.hamburger');
        const dropdown = wrapper.find('.dropdown');
        const container = wrapper.find('.libcomp-hamburger_Container');

        expect(wrapper).toMatchSnapshot();

        hamburger.simulate('onmouseover');
        expect(wrapper).toMatchSnapshot();

        dropdown.simulate('onmouseover');
        expect(wrapper).toMatchSnapshot();
        
    })

});


describe('<Hamburger /> dropdown state', () => {

    it('dropdown should contain', () => {
        const wrapper = shallow(<Hamburger />);
        const hamburger = wrapper.find('.hamburger');
        const dropdown = wrapper.find('.dropdown');

        let links = wrapper.state().links;
        let toggle = wrapper.state().toggle;

        let links_expected = {
            login: {
                link: '/logout',
                className: 'link',
                text: 'Logout'
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

        let html =  [<li className="link" href="/logout">Logout</li>, <li className="link" href="/home_page">Home Page</li>, <li className="link" href="/resume">Resume</li>, <li className="link" href="/home_page"
>Projects</li>, <li className="link" href="/contact">Contact</li>]

        expect(links).toEqual(links_expected);

        expect(newHamburger.links_compile(links)).toEqual(html);

        expect(dropdown).toMatchSnapshot();

        hamburger.simulate('onmouseenter');
        expect(dropdown).toMatchSnapshot();

        hamburger.simulate('onmouseleave');
        expect(dropdown).toMatchSnapshot();
    })

});