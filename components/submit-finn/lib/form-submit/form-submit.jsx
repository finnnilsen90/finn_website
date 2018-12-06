const React = require('react');
const reactclass = require('create-react-class');
const css = require('./form-submit.css')

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
            </form>
        </div>
        )
    }

}

module.exports = Form;