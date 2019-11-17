const React = require('react');
const reactclass = require('create-react-class');
const css = require('./form-contact.css')

const Button_one = require('../../../lib/button-one/button-one.js');
const Message = require('../../../lib/message/message.js');

class Form extends React.Component {
    
    constructor(props) {
    super(props);
    this.state = {
            msg_sent: false,
            msg_state: '',
            msg: []
        };
       this.message = this.message.bind(this);
    }

    message(result) {
        let msg = document.querySelector('.msg_comp');
        let msg_state = result ? 'Success!':'Error Sending'

        
        this.setState(() => ({
            msg_sent: true,
        }));
        this.setState(() => ({
            msg_state: result ? 'good' : 'error'
        }));
        this.setState(() => ({
            msg: [msg_state]
        }));

        msg.style.display = 'block';
    }
     

    componentDidMount() {
        let url = window.location.href;
        let searchParams1 = (new URL(document.location)).searchParams.get('valid');
        console.log('query string present => ',searchParams1);
        if (searchParams1) {
            console.log('response => ',searchParams1);
            this.message(searchParams1);
        };
            
    }
    render() {

        return (
        <div className={'form-contact_Container'+' font'}>
            <h1 className='header'>Contact</h1>
            <div className='msg_comp'>
                <Message state={this.state.msg_state} class='msg' message={this.state.msg} />
            </div>
            <form className='form' method='post' action='/email'>
                <div className='input_box'>
                    <label className={'label '+'e_label'}>Email</label><input className='input' type='text' name='email'/><br/>
                </div>
                <div className='input_box'>
                    <label className={'label '+'s_label'}>Subject</label><input className='input' type='text' name='subject'/><br/>
                </div>
                <div className='input_box'>
                    <label className={'label '+'message'}>Message</label><br/>
                    <textarea className='text_input' type='text' name='message'></textarea>
                </div>
                <div className='button'>
                    <Button_one name='Submit' button_class='submit_msg' type='submit' value='Submit'/>
                </div>
            </form>
        </div>
        )
    }

}

module.exports = Form;