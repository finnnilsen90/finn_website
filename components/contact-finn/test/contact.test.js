const React = require('react');
const ReactTestUtils = require('react-dom/test-utils');
const renderer = require('react-test-renderer')
let { shallow, mount, render } = require('enzyme');

const Contact = require('../contact-finn.js');
const Form = require('../lib/form-contact/form-contact.js');

let ContactConst = new Contact(); 

describe('component connection', () => {

    it('should be defined', () => {
        expect(Contact).toBeDefined();
    })

})  
   
describe('<Contact />', () => {

    const wrapper = render(<Contact />);

    it('renders components', () => {
        expect(wrapper).toMatchSnapshot();
    });

});

describe('<Contact /> baseline parts', () => {
    const wrapper = mount(<Contact />, { attachTo: document.body });

    it('state fetch is defined', () => {
        expect(wrapper.state().fetch).toBeDefined()
    })

    it('state fetch is null', () => {
        expect(wrapper.state().fetch).toEqual(null)
    })

});

// describe('<Contact /> functions', () => {

//     const wrapper = mount(<Contact />);

//     it('state fetch is defined', () => {
//         expect(wrapper.state().fetch).toBeDefined()
//     })
    
// });