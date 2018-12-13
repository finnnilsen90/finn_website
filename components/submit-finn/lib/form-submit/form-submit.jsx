const React = require('react');
const reactclass = require('create-react-class');
const css = require('./form-submit.css');
// const datepicker = require('js-datepicker');

const Button_one = require('../../../lib/button-one/button-one.js');

class Form extends React.Component {
    
    constructor(props) {
    super(props);
    this.state = {
            picker: ''
        };
       
    }
    componentWillMount() {
        
    }

    componentDidMount() {

    }
    render() {

        return (
        <div className={'form-submit_Container '+'font'}>
            <form className='form' action='/submit'>
                <div className='input_box'>
                    <label className={'label '+'f_label'}>First Name</label><input className='input' type='text' name='first_name'/><br/>
                </div>
                <div className='input_box'>
                    <label className={'label '+'l_label'}>Last Name</label><input className='input' type='text' name='last_name'/><br/>
                </div>
                <div className='input_box'>
                    <label className={'label '+'company_label'}>Company</label><input className='input' type='text' name='company'/><br/>
                </div>
                <div className='input_box'>
                    <label className={'label '+'proj_desc'}>Project Description</label><br/>
                    <textarea className='text_input'></textarea>
                </div>
                <div className='input_box'>
                    <label className={'label '+'d_label'}>Select Date</label><input className={'input '+'date_select'} type='date' name='date'/>
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