var React = require('react');
var reactClass = require('create-react-class');
var ReactDom = require('react-dom');
var css = require('./medium-example.css')

const Mediumchild = require('./lib/test-medium/test-medium.js')

class Medium extends React.Component {
    
    constructor(props) {
    super(props);
    this.state = {
            test: 'Test'
        };
    
    }
    
    render() {
        
        return (
            <div className='containter'>
                <Mediumchild />
            </div>
        )
    }

};

module.exports = Medium;

ReactDom.render(<Medium />, document.querySelector('.medium-example') || document.createElement('div'));

