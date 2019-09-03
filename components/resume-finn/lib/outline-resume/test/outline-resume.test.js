const React = require('react');
const ReactTestUtils = require('react-dom/test-utils');
const renderer = require('react-test-renderer')
let { shallow, mount, render } = require('enzyme');

const Outline = require('../outline-resume.js');
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

describe('Dropdown content generator', () => {

    let actual = {
        title: "responsibilities",
        desc: "This is a description.",
        list: ["test", "test2"]
    }

    let expected = '<div><h4 className="drop_text">responsibilities</h4><p className="drop_text">This is a description.</p><ul className="drop_text">[object Object],[object Object]</ul></div>';

    const wrapper = mount(<Outline />);
    let content = wrapper.instance().content_func(actual,test=true);


    it('should match html', () => {
        expect(content).toMatch(expected)
    })
})