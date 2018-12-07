const React = require('react');
const reactclass = require('create-react-class');
const css = require('./form-submit.css');
const datepicker = require('js-datepicker');

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
        const picker = datepicker('.date_select');
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
                    <label className={'label'}>Select Date</label><input className={'input '+'date_select'} type='text' name='date'/>
                </div>
            </form>
        </div>
        )
    }

}

module.exports = Form;