const React = require('react');
const ReactTestUtils = require('react-dom/test-utils');
const renderer = require('react-test-renderer');
let { shallow, mount, render } = require('enzyme');

const Hamburger = require('../hamburger.js');

let newHamburger = new Hamburger();

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

describe('component connection', () => {

    it('should be defined', () => {
        expect(Hamburger).toBeDefined();
    })

}) 

describe('<Hamburger />', () => {

    const wrapper = render(<Hamburger menu={links_expected}/>);

    it('renders components', () => {
        expect(wrapper).toBeTruthy();
    });

    it('renders an `.hamburger`', () => {
        expect(wrapper.find('.hamburger')).toHaveLength(1);
    });

});

describe('<Hamburger /> state', () => {

    it('should match state of each action', () => {
        const wrapper = shallow(<Hamburger menu={links_expected}/>);
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

    const wrapper = shallow(<Hamburger menu={links_expected}/>);
    const hamburger = wrapper.find('.hamburger');
    const dropdown = wrapper.find('.dropdown');

    let toggle = wrapper.state().toggle;

    let html =  [<li className="link" href="/logout">Logout</li>, <li className="link" href="/home_page">Home Page</li>, <li className="link" href="/resume">Resume</li>, <li className="link" href="/home_page"
>Projects</li>, <li className="link" href="/contact">Contact</li>]

    it('dropdown should snapshot at each state', () => {

        expect(dropdown).toMatchSnapshot();

        hamburger.simulate('onmouseenter');
        expect(dropdown).toMatchSnapshot();

        hamburger.simulate('onmouseleave');
        expect(dropdown).toMatchSnapshot();
    })

    it('html should match this array', ()=> {
        expect(newHamburger.links_compile(links_expected)).toEqual(html);
    })

});



describe('error reporting', () => {

    console.error = jest.fn();

    const wrapper = shallow(<Hamburger />);
    console.log('mockedError => ', console.error.mock.calls);

    it('should throw an error if no props passed', () => {
        expect(console.error).toHaveBeenCalledTimes(1);
    })
})