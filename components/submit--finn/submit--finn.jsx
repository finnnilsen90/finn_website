var React = require('react');
var reactClass = require('create-react-class');
var ReactDom = require('react-dom');
var css = require('./submit--finn.css')

const Form = require('./lib/form-submit/form-submit.js')

class Submit extends React.Component {
    
    constructor(props) {
    super(props);
    this.state = {
            test: 'Test'
        };
    
    }
    
    render() {
        
        return (
            <div className='containter'>
                <Form />
            </div>
        )
    }

};

module.exports = Submit;

ReactDom.render(<Submit />, document.querySelector('.submit--finn') || document.createElement('div'));

