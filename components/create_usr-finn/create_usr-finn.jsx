var React = require('react');
var reactClass = require('create-react-class');
var ReactDom = require('react-dom');
var css = require('./create_usr-finn.css')

const Form = require('./lib/form-create_usr/form-create_usr.js')

class Create_usr extends React.Component {
    
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

module.exports = Create_usr;

ReactDom.render(<Create_usr />, document.querySelector('.create_usr-finn') || document.createElement('div'));

