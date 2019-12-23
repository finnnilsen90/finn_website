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
            err_message: [],
            auth_status: (new URL(document.location)).searchParams.get('valid')
        };
        this.message_status = this.message_status.bind(this);
        this.server_login = this.server_login.bind(this);
    }

    server_login(username, password) {
        let message = document.querySelector('.msg_container');
        let err_status = this.state.auth_status;
        let err_arr = []

        if (err_status==='blank_username') {
            err_arr.push('Please input a username')
            message.style.display = 'block';
        } 
        
        if (err_status==='blank_password') {
            err_arr.push('Please input a password')
            message.style.display = 'block';
        } 
      
        if(err_status==='wrong_username') {
            console.log('wrong username')
            err_arr.push('Wrong username!')
            message.style.display = 'block';
        } 
        
        if (err_status==='wrong_password') {
            console.log('wrong password')
            err_arr.push('Wrong password!')
            message.style.display = 'block';
        }

        this.setState({err_message: err_arr})

            
    }
 
    message_status() {
        let err_state = this.state.err_message;
        if (err_state.length>0) {
            
            return <Message state='error' class='message font' message={err_state}/>

        }
  
    }

    componentDidMount() {

        let button = document.querySelector('.submit_log');
        let message = document.querySelector('.msg_container');
        let err_state = this.state.err_message;
        let user = document.querySelector('.input_user').value;
        let password = document.querySelector('.input_pass').value;

        // button.addEventListener('click',(e) => {
        //     let err_state = this.state.err_message;
        //     let user = document.querySelector('.input_user').value;
        //     let password = document.querySelector('.input_pass').value;

        // }, false)

        if (err_state.length>0) {
            this.setState({err_message: []})
            message.style.display = 'none';
        } 

        this.server_login(user,password);
        
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
                        <Button_one name='Login' button_class='submit_log' type='submit' value='Login'/>
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