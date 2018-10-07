const React = require('react');
const ReactTestUtils = require('react-dom/test-utils');
const renderer = require('react-test-renderer')
let { shallow, mount, render } = require('enzyme');

const Test = require('../test.js');

let newTest = new Test();

describe('component connection', () => {

    it('should be defined', () => {
        expect(Test).toBeDefined();
    })

})  
    
describe('<Test />', () => {

    const wrapper = render(<Test />);

    it('renders components', () => {
        expect(wrapper).toMatchSnapshot();
    });


})

// const clickFn = jest.fn(() => 1);
// console.log(clickFn);
describe('Test', () => {
  it('button click should return 1', () => {
    const component = shallow(<Test value='1' />);
    
    expect(component).toMatchSnapshot();
    component.find('div.test').simulate('click');
    expect(component).toMatchSnapshot();
  });
});