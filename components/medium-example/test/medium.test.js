const React = require('react');
const ReactTestUtils = require('react-dom/test-utils');
const renderer = require('react-test-renderer')
let { shallow, mount, render } = require('enzyme');

const Medium = require('../medium-example.js');
const Libcomp = require('../lib/Libcomp/Libcomp.js')

let MediumConst = new Medium(); 

jest.mock('../lib/Libcomp/Libcomp.js', () => 'Libcomp')

describe('component connection', () => {

    it('should be defined', () => {
        expect(Medium).toBeDefined();
    })

})  
   
describe('<Medium />', () => {

    const wrapper = render(<Medium />);

    it('renders components', () => {
        expect(wrapper).toMatchSnapshot();
    });


})
