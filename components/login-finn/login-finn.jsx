var React = require('react');
var reactClass = require('create-react-class');
var ReactDom = require('react-dom');
var css = require('./login-finn.css')
let Background = require("../../images/santa_cruz2015.jpg");

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
            <div className='container'>
                <img className='background_img' src={Background} />
                    <div className='box_cont'>
                        <Box />
                    </div>

            </div>
        )
    }

};

module.exports = Login;

ReactDom.render(<Login />, document.querySelector('.login-finn') || document.createElement('div'));

