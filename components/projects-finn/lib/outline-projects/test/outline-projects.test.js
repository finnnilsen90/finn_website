const React = require('react');
const ReactTestUtils = require('react-dom/test-utils');
const renderer = require('react-test-renderer')
let { shallow, mount, render } = require('enzyme');

const Outline = require('../outline-projects.js');
const Dropdown = require('../../../../lib/content-dropdown/content-dropdown.js');
let newOutline = new Outline();

describe('component connection', () => {

    it('should be defined', () => {
        expect(Outline).toBeDefined();
    })

    it('dropdown should be defined', () => {
        expect(Dropdown).toBeDefined()
    })

})  
    
describe('<Outline />', () => {

    const wrapper = render(<Outline />);

    it('renders components', () => {
        expect(wrapper).toMatchSnapshot();
    });


})

describe('Dropdown content function', () => {

    const wrapper = mount(<Outline />);
    const content = wrapper.state().dropdown.test;
    const cont_function = wrapper.instance().content_func(content, test=true);
    const expected_output = '<div><h4 className=\"drop_text\">Job Description</h4><p className=\"drop_text\">As an Associate Director I was in charge of the technical product offering Mogo. Managing software projects and different packaged offerings for our clients. I also managed a team of 4 account managers on the media acctivation side.</p><ul className=\"drop_text\">[object Object],[object Object],[object Object]</ul></div>';

    it('outputs content in proper format.', () => {
        expect(expected_output).toMatch(cont_function);
    });


})