const React = require('react');
const reactclass = require('create-react-class');
const css = require('./message.css')

class Message extends React.Component {
    
    constructor(props) {
    super(props);
    this.state = {

        };

       
    }

    componentDidMount() {

    }

    render() {

        return (
        <div className={'message_Container '+this.props.class}>
            <div className={'msg_box '+this.props.state}>
                <p className='p_text'>{this.props.message}</p>
            </div> 
        </div>
        )
    }

}

module.exports = Message;