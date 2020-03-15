const React = require('react');
const ReactTestUtils = require('react-dom/test-utils');
const renderer = require('react-test-renderer')
let { shallow, mount, render } = require('enzyme');

const Slider = require('../slider-home.js');


describe('component connection', () => {

    it('should be defined', () => {
        expect(Slider).toBeDefined();
    })

})  
    
describe('<Slider />', () => {

    const wrapper = mount(<Slider />, { attachTo: document.body });

    it('renders components', () => {
        expect(wrapper).toMatchSnapshot();
    });

})

// describe('change function', ()=> {

//     const wrapper = mount(<Slider />, { attachTo: document.body });

//     it('should show true state', () => {
//         let state_switch = wrapper.state().switch;
//         expect(state_switch).toEqual(true);
//     })

//     it('should have slide_state equal 0', () => {
//         let slide_state = wrapper.state().slide_state;
//         expect(slide_state).toEqual(0);
//     })

//     it('should have div_switch equal true', () => {
//         let div_switch = wrapper.state().div_switch;
//         expect(div_switch).toEqual(true);
//     })

//     it('should show false state //CHANGE FUNCTION//', () => {
//         let state_switch = wrapper.state().switch;
//         expect(state_switch).toEqual(false);
//     })

//     it('should have slide_state equal 1', () => {
//         let slide_state = wrapper.state().slide_state;
//         expect(slide_state).toEqual(1);
//     })

// })


// describe('Transition content', () => {
//     const wrapper = mount(<Slider />, { attachTo: document.body });
//     // const shallow_wrap = shallow(<Slider />, { attachTo: document.body });
//     let slider_container = Object.entries(wrapper.state().content);
//     const trans_func = wrapper.state().compiled_content;

//     it('should be an object', () => {
//         expect(typeof(slider_container)).toEqual('object')
//     })

//     let html1 = <div className="slide1 slide_cont"><h2>{slider_container[0][1].title}</h2><div className="slider_class">{slider_container[0][1].content}</div></div>
//     let html2 = <div className="slide2 slide_cont"><h2>{slider_container[1][1].title}</h2><div className="slider_class">{slider_container[1][1].content}</div></div>

//     it('should show content 1', () => {
//         expect(html1).toEqual(trans_func[0])
//     })

//     it('should show content 2', () => {
//         expect(html2).toEqual(trans_func[1])
//     })
// })


// describe('Transition function', () => {

//     it('for div1 should transition to next class state', finish => {
//         const wrapper = mount(<Slider /> , { attachTo: document.body });

//         function callback() {
//             expect(wrapper.state().div1).toEqual(false)
//             finish()
//         }

//         setTimeout(() => {callback()}, 3000);
//     })

//     it('for div2 should transition to next class state', finish => {
//         const wrapper = mount(<Slider /> , { attachTo: document.body });

//         function callback() {
//             expect(wrapper.state().div2).toEqual(true)
//             finish()
//         }

//         setTimeout(() => {callback()}, 3000);
//     })

// })

// describe('div1 class', () => {
//     const wrapper = mount(<Slider /> , { attachTo: document.body });

//     it('should exist at child 0', () => {
//         expect(wrapper.find('.slider-home_Container').childAt(0).find('.div1')).toHaveLength(1);
//     })

//     it('should exist at child 1', () => {
//         expect(wrapper.find('.slider-home_Container').childAt(1).find('.div2')).toHaveLength(1);
//     })
// })

// describe('Child swap', () => {
//     const wrapper = mount(<Slider /> , { attachTo: document.body });

//     it('should be div1 at 0', () => {
//         expect(wrapper.find('.slider-home_Container').childAt(0).find('.div1')).toHaveLength(1);
//     })

//     it('should be content1', finish => {
//         const wrapper = mount(<Slider /> , { attachTo: document.body });
//         let slider_container = Object.entries(wrapper.state().content);
//         let html1 = <div className="div1 slider_func"><div className="slide1 slide_cont"><h2>{slider_container[0][1].title}</h2><div className="slider_class">{slider_container[0][1].content}</div></div></div>

//         expect(wrapper.instance().child_swap(true,0)[0]).toEqual(html1);
            
//     })

// })