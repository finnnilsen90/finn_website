const React = require('react');
const reactclass = require('create-react-class');
const css = require('./message.css')

class Message extends React.Component {
    
    constructor(props) {
    super(props);
    this.state = {

        };
        this.format = this.format.bind(this);
    }

    format(arr) {
        let new_arr = []
        Array.prototype.isArray = true;
      
        if (arr.isArray) {
            for (let i=0;i<arr.length;i++) {
                new_arr.push(<p>{arr[i]}</p>)
            }
            return new_arr;
        } else {
            console.error('Message component input needs to be an array!')
        }
    }

    componentDidMount() {

    }

    render() {

        return (
        <div className={'message_Container '+this.props.class}>
            <div className={'msg_box '+this.props.state}>
                <div className='p_text'>{this.format(this.props.message)}</div>
            </div> 
        </div>
        )
    }

}

module.exports = Message;