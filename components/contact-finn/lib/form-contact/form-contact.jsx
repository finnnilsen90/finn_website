const React = require('react');
const reactclass = require('create-react-class');
const css = require('./form-contact.css')

const Button_one = require('../../../lib/button-one/button-one.js');

class Form extends React.Component {
    
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
        <div className={'form-contact_Container'+' font'}>
            <h1 className='header'>Contact</h1>
            <form className='form' action='mailto:fnilsen1051@gmail.com' method='post'>
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