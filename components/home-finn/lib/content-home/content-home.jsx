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
        <div className='content-home_Container'>
            <img className='profile' src={Profile} />
            <Slider />
        </div>
        )
    }

}

module.exports = Content;