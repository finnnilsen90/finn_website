var React = require('react');
var reactClass = require('create-react-class');
var ReactDom = require('react-dom');
var css = require('./karma-finn.css')

const Libcomp = require('./lib/Libcomp/Libcomp.js')

class Karma extends React.Component {
    
    constructor(props) {
    super(props);
    this.state = {
            test: 'Test'
        };
    
    }
    
    render() {
        
        return (
            <div className='containter'>
                <Libcomp />
            </div>
        )
    }

};

module.exports = Karma;

ReactDom.render(<Karma />, document.querySelector('.karma-finn') || document.createElement('div'));

