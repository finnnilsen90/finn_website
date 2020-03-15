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
    
    render() {
        
        return (
            <div className='containter'>
                <Hamburger menu={this.state.fetch}/>
                <Content />
            </div>
        )
    }

};

module.exports = Home;

ReactDom.render(<Home />, document.querySelector('.home-finn') || document.createElement('div'));

