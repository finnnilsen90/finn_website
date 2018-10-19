const React = require('react');
const reactclass = require('create-react-class');
const css = require('./button-one.css')

class Button extends React.Component {
    
    constructor(props) {
    super(props);
    this.state = {
 
        };

       
    }
    

    componentDidMount() {

    }
    render() {

        return (
        <div className='button-one_Container'>
            <button className='button_style_one' href={this.props.href}>{this.props.name}</button>
        </div>
        )
    }

}

module.exports = Button;