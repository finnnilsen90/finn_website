const React = require('react');
const reactclass = require('create-react-class');
const css = require('./button-two.css')

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
        <div className='button-two_Container'>
            <button className='button_style_two' href={this.props.href}>{this.props.name}</button>
        </div>
        )
    }

}

module.exports = Button;