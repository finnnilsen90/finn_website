const React = require('react');
const ReactTestUtils = require('react-dom/test-utils');
const renderer = require('react-test-renderer')
let { shallow, mount, render } = require('enzyme');

const Karma = require('../karma-finn.js');
const Libcomp = require('../lib/Libcomp/Libcomp.js')

let KarmaConst = new Karma(); 

jest.mock('../lib/Libcomp/Libcomp.js', () => 'Libcomp')

describe('component connection', () => {

    it('should be defined', () => {
        expect(Karma).toBeDefined();
    })

})  
   
describe('<Karma />', () => {

    const wrapper = render(<Karma />);

    it('renders components', () => {
        expect(wrapper).toMatchSnapshot();
    });


})
