var React = require('react');
var reactClass = require('create-react-class');
var ReactDom = require('react-dom');
var css = require('./login-finn.css')

const Box = require('./lib/box-login/box-login.js')

class Login extends React.Component {
    
    constructor(props) {
    super(props);
    this.state = {
            test: 'Test'
        };
    
    }
    
    render() {
        
        return (
            <div className='containter'>
                <Box />
            </div>
        )
    }

};

module.exports = Login;

ReactDom.render(<Login />, document.querySelector('.login-finn') || document.createElement('div'));

