var React = require('react');
var reactClass = require('create-react-class');
var ReactDom = require('react-dom');
var css = require('./styleguid-finn.css')

const Color = require('./lib/color-styleguid/color-styleguid.js')

class Styleguid extends React.Component {
    
    constructor(props) {
    super(props);
    this.state = {
            test: 'Test'
        };
    
    }
    
    render() {
        
        return (
            <div className='containter'>
                <Color />
            </div>
        )
    }

};

module.exports = Styleguid;

ReactDom.render(<Styleguid />, document.querySelector('.styleguid-finn') || document.createElement('div'));

