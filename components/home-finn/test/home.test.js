const React = require('react');
const ReactTestUtils = require('react-dom/test-utils');
const renderer = require('react-test-renderer')
let { shallow, mount, render } = require('enzyme');

const Home = require('../home-finn.js');
const Content = require('../lib/content-home/content-home.js')

let HomeConst = new Home(); 

jest.mock('../lib/content-home/content-home.js', () => 'Content')

describe('component connection', () => {

    it('should be defined', () => {
        expect(Home).toBeDefined();
    })

})  
   
describe('<Home />', () => {

    const wrapper = render(<Home />);

    it('renders components', () => {
        expect(wrapper).toMatchSnapshot();
    });


})
