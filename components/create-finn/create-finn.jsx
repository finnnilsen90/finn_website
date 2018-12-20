var React = require('react');
var reactClass = require('create-react-class');
var ReactDom = require('react-dom');
var css = require('./create-finn.css')

const Form = require('./lib/form-create/form-create.js');
const Hamburger = require('../lib/hamburger/hamburger.js');
const Footer = require('../lib/footer/footer.js');


class Create extends React.Component {
    
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
    
    render() {
        
        return (
            <div className='containter'>

                <Hamburger menu={this.state.fetch}/>

                <Form />

                <Footer menu={this.state.fetch}/>
                
            </div>
        )
    }

};

module.exports = Create;

ReactDom.render(<Create />, document.querySelector('.create-finn') || document.createElement('div'));

