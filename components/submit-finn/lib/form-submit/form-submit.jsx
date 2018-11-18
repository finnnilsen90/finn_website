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
        <div className='form-submit_Container'>
        
        </div>
        )
    }

}

module.exports = Form;