const React = require('react');
const ReactTestUtils = require('react-dom/test-utils');
const renderer = require('react-test-renderer')

const Styleguid = require('../styleguid-finn.js');
const Libcomp = require('../lib/Libcomp/Libcomp.js')

let StyleguidConst = new Styleguid(); 

jest.mock('../lib/Libcomp/Libcomp.js', () => 'Libcomp')

describe('component connection', () => {

    it('should be defined', () => {
        expect(Styleguid).toBeDefined();
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
