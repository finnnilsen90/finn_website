const React = require('react');
const ReactTestUtils = require('react-dom/test-utils');
const renderer = require('react-test-renderer')

const Styleguid = require('../styleguid-finn.js');

let StyleguidConst = new Styleguid(); 

describe('component connection', () => {

    it('should be defined', () => {
        expect(Styleguid).toBeDefined();
    })

})  
   
describe('component content', () => {

    it('should match snapshot of test div.', () => {
        const tree = renderer
            .create(<StyleguidConst/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

})
