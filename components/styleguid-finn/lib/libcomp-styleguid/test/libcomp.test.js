const React = require('react');
const ReactTestUtils = require('react-dom/test-utils');
const renderer = require('react-test-renderer')

const Libcomp = require('../libcomp-styleguid.js');

let newlibcompcomp = new Libcomp();

describe('component connection', () => {

    it('should be defined', () => {
        expect(Libcomp).toBeDefined();
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