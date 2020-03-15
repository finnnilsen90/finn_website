var React = require('react');
var reactClass = require('create-react-class');
var ReactDom = require('react-dom');
var css = require('./submit-finn.css')

const Form = require('./lib/form-submit/form-submit.js');
const Hamburger = require('../lib/hamburger/hamburger.js');
const Footer = require('../lib/footer/footer.js');

class Submit extends React.Component {
    
    constructor(props) {
    super(props);
    this.state = {
            fetch: null
        };

        this.get_hamburger = this.get_hamburger.bind(this);
    
    }

    get_hamburger(action) {

        fetch(action)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({fetch: responseJson})
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

module.exports = Submit;

ReactDom.render(<Submit />, document.querySelector('.submit-finn') || document.createElement('div'));

