const React = require('react');
const ReactTestUtils = require('react-dom/test-utils');
const renderer = require('react-test-renderer')
let { shallow, mount, render } = require('enzyme');

const Resume = require('../resume-finn.js');
const Outline = require('../lib/outline-resume/outline-resume.js')

let ResumeConst = new Resume(); 

jest.mock('../lib/outline-resume/outline-resume.js', () => 'Outline')

describe('component connection', () => {

    it('should be defined', () => {
        expect(Resume).toBeDefined();
    })

})  
   
describe('<Resume />', () => {

    const wrapper = render(<Resume />);

    it('renders components', () => {
        expect(wrapper).toMatchSnapshot();
    });


})
