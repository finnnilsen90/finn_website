const React = require('react');
const ReactTestUtils = require('react-dom/test-utils');
const renderer = require('react-test-renderer')
let { shallow, mount, render } = require('enzyme');

const Content = require('../content-dropdown.js');

let newContent = new Content();

describe('component connection', () => {

    it('should be defined', () => {
        expect(Content).toBeDefined();
    })

})  
    
describe('<Content /> render', () => {

    const wrapper = render(<Content />);

    it('renders components', () => {
        expect(wrapper).toMatchSnapshot();
    });


})

describe('<Content /> shallow', () => {

    const wrapper = shallow(<Content title='test' class='test' content='test content' />, { attachTo: document.body });
    
    it('should match props', () => {
        expect(wrapper).toMatchSnapshot();
    });
        
})

describe('<Content /> mount', () => {

    const wrapper = shallow(<Content title='test' class='test' content='test content' />, { attachTo: document.body });
    const arrow = wrapper.find('.arrow');
    
    it('should match props', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('state should be false on load then true on click', () => {
        expect(wrapper.state().arrow).toEqual(false);
        arrow.simulate('click');
        expect(wrapper.state().arrow).toEqual(true);
    })

    // it('state should be true', () => {
        
    //     expect(wrapper).toMatchSnapshot();
    // })
        
})

describe('random class should be generated', () => {

    let wrapper = mount(<Content class='test'/>, { attachTo: document.body })
    let arw = wrapper.state().arw;
    let arw_click = wrapper.state().arw_click;
    let cont_par = wrapper.state().cont_par;
    let cont_hr = wrapper.state().cont_hr;

    it('should match assigned class', () => {
        expect(arw).toEqual('arw_test')
    })

    it('should match arw_click_test', () => {
        expect(arw_click).toEqual('arw_click_test')
    })

    it('should match cont_par_test', () => {
        expect(cont_par).toEqual('cont_par_test')
    })

    it('should match cont_hr_test', () => {
        expect(cont_hr).toEqual('cont_hr_test')
    })

})