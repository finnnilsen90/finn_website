var React = require('react');
var reactClass = require('create-react-class');
var ReactDom = require('react-dom');
var css = require('./contact-finn.css')

const Form = require('./lib/form-contact/form-contact.js');
const Hamburger = require('../lib/hamburger/hamburger.js');
const Footer = require('../lib/footer/footer.js');

class Contact extends React.Component {
    
    constructor(props) {
    super(props);
    this.state = {
            fetch: null
        };

        this.get_hamburger = this.get_hamburger.bind(this);
    
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

    }
    
    render() {
        
        return (
            <div className='container'>
                <Hamburger menu={this.state.fetch}/>
                <Form />
                <Footer menu={this.state.fetch}/>
            </div>
        )
    }

};

module.exports = Contact;

ReactDom.render(<Contact />, document.querySelector('.contact-finn') || document.createElement('div'));

