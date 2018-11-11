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
            err_message: []
        };
        this.message_status = this.message_status.bind(this)
        this.push_error = this.push_error.bind(this)
    }
 
    message_status() {
        let err_state = this.state.err_message;
        if (err_state.length>0) {
            
            return <Message state='error' class='message font' message={err_state}/>

        }

    }

    push_error(e) {
        let username = document.querySelector('.input_user');
        let password = document.querySelector('.input_pass');
        let message = document.querySelector('.msg_container');
        let err_arr = []
        
        if (username.value===undefined || username.value==='') {
            e.preventDefault()
            err_arr.push('Please input a username')
            message.style.display = 'block';
        } 

        if (password.value===undefined || password.value==='') {
            e.preventDefault()
            err_arr.push('Please input a password')
            message.style.display = 'block';
        } 

        this.setState({err_message: err_arr})

    }

    componentDidMount() {

        let button = document.querySelector('.submit_log');
        let message = document.querySelector('.msg_container');

        button.addEventListener('click',(e) => {
            let err_state = this.state.err_message;

            if (err_state.length>0) {
                this.setState({err_message: []})
                message.style.display = 'none';
            } 
            
            this.push_error(e)

        }, false)
        
    }

    render() {

        return (
        <div className={'box-login_Container '+'font'}>
            <div className='msg_container'>
                {this.message_status()}
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
                        <Button_one name='Login' href='./' button_class='submit_log' type='submit' value='Login'/>
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