var React = require('react');
var reactClass = require('create-react-class');
var ReactDom = require('react-dom');
var css = require('./home-finn.css')

const Hamburger = require('../lib/hamburger/hamburger.js')
const Content = require('./lib/content-home/content-home.js')

class Home extends React.Component {
    
    constructor(props) {
    super(props);
    this.state = {
            test: 'Test'
        };
    
    }
    
    render() {
        
        return (
            <div className='containter'>
                <Hamburger />
                <Content />
            </div>
        )
    }

};

module.exports = Home;

ReactDom.render(<Home />, document.querySelector('.home-finn') || document.createElement('div'));

