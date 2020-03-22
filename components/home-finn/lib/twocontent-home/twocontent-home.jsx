const React = require('react');
const reactclass = require('create-react-class');
const css = require('./twocontent-home.css');
let Resume_icon = require("../../../../images/resume_icon.jpg");

let Slider = require('../slider-home/slider-home.js');
let Button = require('../../../lib/button-one/button-one.js');

class Twocontent extends React.Component {
    
    constructor(props) {
    super(props);
    this.state = {
            test: ''
        };
       
    }
     

    componentDidMount() {

        
    };

    render() {

        return (
        <div className={'twocontent-home_Container'+' font'}>
            <h1 className='resume_header'><a href='/resume'>Resume</a></h1>
            <img className='resume_icon' src={Resume_icon} />
            <Slider />
        </div>
        )
    }

}

module.exports = Twocontent;