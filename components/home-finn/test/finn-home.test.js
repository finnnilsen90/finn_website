const React = require('react');
const ReactTestUtils = require('react-dom/test-utils');
const renderer = require('react-test-renderer')
let { shallow, mount, render } = require('enzyme');

const Home = require('../home-finn.js');

let HomeConst = new Home(); 

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

describe('Get hamburger menu', () => {

    let response = require('../../../data_files/base_menu.json')

    it('should return the json menu', () => {
        expect(response).toMatchSnapshot();
    })
})
