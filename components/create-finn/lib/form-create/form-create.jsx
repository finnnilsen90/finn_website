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


                <div className='button'>
                    <Button_one name='Submit' button_class='submit_log' type='submit' value='Submit'/>
                </div>

            </form>
        </div>
        )
    }

}

module.exports = Form;