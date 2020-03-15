const React = require('react');
const ReactTestUtils = require('react-dom/test-utils');
const renderer = require('react-test-renderer')
let { shallow, mount, render } = require('enzyme');

const Projects = require('../projects-finn.js');
const Outline = require('../lib/outline-projects/outline-projects.js');

let ProjectsConst = new Projects(); 

describe('component connection', () => {

    it('should be defined', () => {
        expect(Projects).toBeDefined();
    })

})  
   
describe('<Projects />', () => {

    const wrapper = render(<Projects />);

    it('renders components', () => {
        expect(wrapper).toMatchSnapshot();
    });

});

describe('<Projects /> baseline parts', () => {
    const wrapper = mount(<Projects />, { attachTo: document.body });

    it('state fetch is defined', () => {
        expect(wrapper.state().fetch).toBeDefined()
    })

    it('state fetch is null', () => {
        expect(wrapper.state().fetch).toEqual(null)
    })

});

// describe('<Projects /> functions', () => {

//     const wrapper = mount(<Projects />);

//     it('state fetch is defined', () => {
//         expect(wrapper.state().fetch).toBeDefined()
//     })
    
// });