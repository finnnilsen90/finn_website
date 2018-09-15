const React = require('react');
const ReactTestUtils = require('react-dom/test-utils');
const renderer = require('react-test-renderer')

const VarName = require('../compName.js');
const ChildConst = require('../lib/child/child.js')

let varNameConst = new VarName(); 

jest.mock('../lib/child/child.js', () => 'ChildConst')

describe('component connection', () => {

    it('should be defined', () => {
        expect(VarName).toBeDefined();
    })

})  
   
describe('component content', () => {

it('should match snapshot of test div.', () => {
     const component = renderer.create(
        <div className='containter'>
            <Libcomp />
        </div>          
        )
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

})
