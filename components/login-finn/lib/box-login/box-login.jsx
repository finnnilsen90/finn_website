const React = require('react');
const reactclass = require('create-react-class');
const css = require('./box-login.css')

const Button_two = require('../../../lib/button-two/button-two.js');

class Box extends React.Component {
    
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
        <div className='box-login_Container'>
            <div className='box'>

                <Button_two name='Login' href='./'/>

            </div>
        </div>
        )
    }

}

module.exports = Box;