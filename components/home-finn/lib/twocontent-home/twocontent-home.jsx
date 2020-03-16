const React = require('react');
const reactclass = require('create-react-class');
const css = require('./twocontent-home.css');
let Resume_icon = require("../../../../images/resume_icon.jpg");



class Twocontent extends React.Component {
    
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
        <div className={'twocontent-home_Container'+' font'}>
            <img className='resume_icon' src={Resume_icon} />
        </div>
        )
    }

}

module.exports = Twocontent;