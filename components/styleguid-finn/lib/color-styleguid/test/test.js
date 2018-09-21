const React = require('react');
const ReactTestUtils = require('react-dom/test-utils');
const renderer = require('react-test-renderer')

const Color = require('../color-styleguid.js');

let newColor = new Color();

describe('component connection', () => {

    it('should be defined', () => {
        expect(Color).toBeDefined();
    })

})  
    
describe('component content', () => {

it('should match snapshot of test div.', () => {
     const component = renderer.create(
            <div className='componentContainer'>
                <div className='test'></div>
            </div>
        )
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

})