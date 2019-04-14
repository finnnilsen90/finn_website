var React = require('react');
var reactClass = require('create-react-class');
var ReactDom = require('react-dom');
var css = require('./resume-finn.css')

const Hamburger = require('../lib/hamburger/hamburger.js');
const Outline = require('./lib/outline-resume/outline-resume.js');
const Footer = require('../lib/footer/footer.js');

class Resume extends React.Component {
    
    constructor(props) {
    super(props);
    this.state = {
            test: 'Test'
        };
    
    }
    
    render() {
        
        return (
            <div className='container'>
                <Hamburger /> 
                <Outline />
                <Footer />
            </div>
        )
    }

};

module.exports = Resume;

ReactDom.render(<Resume />, document.querySelector('.resume-finn') || document.createElement('div'));

