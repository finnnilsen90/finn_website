const React = require('react');
const reactclass = require('create-react-class');
const css = require('./form-submit.css');
// const datepicker = require('js-datepicker');

const Button_one = require('../../../lib/button-one/button-one.js');
const Message = require('../../../lib/message/message.js');

class Form extends React.Component {
    
    constructor(props) {
    super(props);
    this.state = {
            msg: [],
            msg_status: (new URL(document.location)).searchParams.get('valid')
        };
        
        this.form_submit = this.form_submit.bind(this);
        this.message = this.message.bind(this);
    }

    form_submit() {
        let container = document.querySelector('.msg_container');
        let url_string = this.state.msg_status;
        let msg_arr = [];

        if (url_string==='success') {
            msg_arr.push('Your order form has been successfully submitted!');
            container.style.display = 'block';
        } 
        if (url_string==='error') {
            msg_arr.push('There was an error with your submission.');
            container.style.display = 'block';
        }

        this.setState({
            msg: msg_arr
        })

    }

    message() {
        let msg_state = this.state.msg;
        let err_state = this.state.msg_status==='success'?'good':'error';

        if (msg_state.length>0) {
            return <Message class='msg_comp' state={err_state} message={msg_state}/>
        }
    }
    
    componentWillMount() {
    
    }

    componentDidMount() {
        this.form_submit()
    }
    render() {

        return (
        <div className={'form-submit_Container '+'font'}>
            <div className='msg_container'>
                {this.message()}
            </div>
            <h1 className='header'>Submit Project</h1>
            <form className='form' action='/form' method='post'>
                <div className='input_box'>
                    <label className={'label '+'p_label'}>Project Name</label><input className='input' type='text' name='project_name'/><br/>
                </div>
                <div className='input_box'>
                    <label className={'label '+'company_label'}>Company</label><input className='input' type='text' name='company'/><br/>
                </div>
                <div className='input_box'>
                    <label className={'label '+'proj_desc'}>Project Description</label><br/>
                    <textarea className='text_input' type='text' name='project_description'></textarea>
                </div>
                <div className='input_box'>
                    <label className={'label '+'d_label'}>Completion Date</label><input className={'input '+'date_select'} type='date' name='date'/>
                </div>
                <div className='input_box'>
                    <label className={'label '+'budget_label'}>Budget</label><input className='input' type='text' name='budget'/><br/>
                </div>

                <div className='button'>
                    <Button_one name='Submit' button_class='submit_log' type='submit' value='Submit'/>
                </div>
            </form>
        </div>
        )
    }

}

module.exports = Form;