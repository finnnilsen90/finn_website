const React = require('react');
const reactclass = require('create-react-class');
const css = require('./box-login.css')

const Button_one = require('../../../lib/button-one/button-one.js');
const Message = require('../../../lib/message/message.js');

class Box extends React.Component {
    
    constructor(props) {
    super(props);
    this.state = {
            status: null,
            message: null
        };
        this.message_status = this.message_status.bind(this)
    }
 
    message_status(status) {
        let msg_state = status || null;
        if (msg_state!==null) {
            
            return <Message state={msg_state} class='message font' message='This is an error message!'/>

        }

    }

    componentDidMount() {
        
    }

    render() {

        return (
        <div className={'box-login_Container '+'font'}>
            <div className='msg_container'>
                {this.message_status('okay')}
            </div>
            <div className='box'>
                <form action='/login' method='post' className='box_form'>
                     <div className='input_box'>
                        <label className={'username '+'label'+' font'}>Username</label>
                        <input className={'input_user '+'font '+'input_css'} type='text' name='username'/>
                    </div>
                    <div className='input_box'>
                        <label className={'password '+'label'+' font'}>Password</label>
                        <input className={'input_pass '+'font '+'input_css'} type='password' name='password'/>
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