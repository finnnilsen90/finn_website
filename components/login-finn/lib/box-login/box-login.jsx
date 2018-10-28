const React = require('react');
const reactclass = require('create-react-class');
const css = require('./box-login.css')

const Button_one = require('../../../lib/button-one/button-one.js');

class Box extends React.Component {
    
    constructor(props) {
    super(props);
    this.state = {
            test: ''
        };
       
    }
 

    componentDidMount() {

    }

    render() {

        return (
        <div className={'box-login_Container '+'font'}>
            <div className='box'>
                <form action='/login' method='post' className='box_form'>
                     <div className='input_box'>
                        <label className={'username '+'label'+' font'}>Username</label>
                        <input className='input_user' type='text' name='username'/>
                    </div>
                    <div className='input_box'>
                        <label className={'password '+'label'+' font'}>Password</label>
                        <input className='input_pass' type='password' name='password'/>
                    </div>

                    <div className='button'>
                        <Button_one name='Login' href='./' type='submit' value='Login'/>
                    </div>
                    <div className='request'>
                        <a href='/' className='font'>Request Login</a>
                    </div>

                </form>

            </div>
        </div>
        )
    }

}

module.exports = Box;