const React = require('react');
const reactclass = require('create-react-class');
const css = require('./form-create.css')

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
        <div className={'form-create_Container '+'font'}>
            <form className='form' action='/create'>
            <div className='input_box'>
                    <label className={'label '+'f_label'}>First Name</label><input className='input' type='text' name='first_name'/><br/>
                </div>
                <div className='input_box'>
                    <label className={'label '+'l_label'}>Last Name</label><input className='input' type='text' name='last_name'/><br/>
                </div>
                <div className='input_box'>
                    <label className={'label '+'e_label'}>Email</label><input className='input' type='text' name='email'/><br/>
                </div>
                <div className='input_box'>
                    <label className={'label '+'p_label'}>Password</label><input className='input' type='password' name='password'/>
                </div>
                <div className='input_box'>
                    <label className={'label '+'t_label'}>Admin</label><input className='check' type='checkbox' name='admin' value='admin'/>
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