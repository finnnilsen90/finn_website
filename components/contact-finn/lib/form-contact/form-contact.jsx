const React = require('react');
const reactclass = require('create-react-class');
const css = require('./form-contact.css')

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
            <h1 className='header'>Template</h1>
            <div className='test_content'>
                Test
            </div>
        </div>
        )
    }

}

module.exports = Form;