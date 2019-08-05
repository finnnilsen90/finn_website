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
            fetch: null
        };

        this.chng_dimension = this.chng_dimension.bind(this);
        this.get_hamburger = this.get_hamburger.bind(this);
    
    }

    
    chng_dimension() {

        let body = document.body,
            html = document.documentElement;

        let height = Math.max( body.scrollHeight, body.offsetHeight, 
                    html.clientHeight, html.scrollHeight, html.offsetHeight );

        let cont_element = document.querySelector('.container');
        cont_element.style.height = String(height) + 'px';
            
    }

    get_hamburger(action) {

        fetch(action)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong');
                }
            })
            .then((responseJson) => {
                this.setState({fetch: responseJson})
            })
            .catch((error) => {
                console.log('menu server error => ',error);
            }) 
    }

    componentWillMount() {
        this.get_hamburger('/login_menu')
    }

    componentDidMount() {

        // console.log('height func invoked')
        // this.chng_dimension()

    }
    
    render() {
        
        return (
            <div className='container'>
                <Hamburger menu={this.state.fetch}/>
                <Outline />
                <Footer menu={this.state.fetch}/>
            </div>
        )
    }

};

module.exports = Resume;

ReactDom.render(<Resume />, document.querySelector('.resume-finn') || document.createElement('div'));

