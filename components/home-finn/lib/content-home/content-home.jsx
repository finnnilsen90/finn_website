const React = require('react');
const reactclass = require('create-react-class');
const css = require('./content-home.css')
let Profile = require("../../../../images/profile_pic.jpg");

let Slider = require('../slider-home/slider-home.js')

class Content extends React.Component {
    
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
        <div className={'content-home_Container '+'font'}>
            <img className='profile' src={Profile} />
            <p className='overview-finn'>
                My name is Finn Nilsen. I have been working in the tech industry for 5+ years in a variety of roles. I’ve been a software developer, digital marketer, and product manager. I have a passion for building great software products and leading technical teams. This website is an overview of my career so far and how I can help any company I work with grow.
            </p>
        </div>
        )
    }

}

module.exports = Content;