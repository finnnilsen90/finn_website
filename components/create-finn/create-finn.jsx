var React = require('react');
var reactClass = require('create-react-class');
var ReactDom = require('react-dom');
var css = require('./create-finn.css')

const Form = require('./lib/form-create/form-create.js')

class Create extends React.Component {
    
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

module.exports = Create;

ReactDom.render(<Create />, document.querySelector('.create-finn') || document.createElement('div'));

