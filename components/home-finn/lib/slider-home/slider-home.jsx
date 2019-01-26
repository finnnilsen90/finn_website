const React = require('react');
const reactclass = require('create-react-class');
const css = require('./slider-home.css')

class Slider extends React.Component {
    
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
        <div className='slider-home_Container'>
            CONTENT
        </div>
        )
    }

}

module.exports = Slider;