const React = require('react');
const reactclass = require('create-react-class');
const css = require('./footer-home.css');

const github_logo = require('../../../../images/github_logo.jpg');
const linkedin_logo = require('../../../../images/linkedin_logo.jpg');
const gmail_logo = require('../../../../images/gmail_logo.jpg');

class Footer extends React.Component {
    
    constructor(props) {
    super(props);
    this.state = {
            test: '',
            toggle: true
        };

        this.git_link = this.git_link.bind(this);
        this.linkd_link = this.linkd_link.bind(this);
        this.gmail_link = this.gmail_link.bind(this);
       
    }
     
    git_link() {
        let link = document.querySelector('.git_link');
        
        let state = this.state.toggle;
        if (state) {
            link.style.display = 'block';

            this.setState(prevState => ({
                toggle: !prevState.toggle
            }));
        } else {
            link.style.display = 'none';

            this.setState(prevState => ({
                toggle: !prevState.toggle
            }));
        }
    }

    linkd_link() {
        let link = document.querySelector('.linkedin_link');
        
        let state = this.state.toggle;
        if (state) {
            link.style.display = 'block';

            this.setState(prevState => ({
                toggle: !prevState.toggle
            }));
        } else {
            link.style.display = 'none';

            this.setState(prevState => ({
                toggle: !prevState.toggle
            }));
        }
    }

    gmail_link() {
        let link = document.querySelector('.gmail_link');
        
        let state = this.state.toggle;
        if (state) {
            link.style.display = 'block';

            this.setState(prevState => ({
                toggle: !prevState.toggle
            }));
        } else {
            link.style.display = 'none';

            this.setState(prevState => ({
                toggle: !prevState.toggle
            }));
        }
    }

    componentDidMount() {
        
    }

    render() {

        return (
        <div className={'footer-home_Container'+' font'}>
            <div className='logo_cont'>
                <a href='https://github.com/finnnilsen90'>
                    <img className='github_logo' src={github_logo} onMouseEnter={this.git_link} onMouseLeave={this.git_link} />
                </a>
                
                <a href='https://www.linkedin.com/in/finn-nilsen-50815182/'>
                    <img className='linkedin_logo' src={linkedin_logo} onMouseEnter={this.linkd_link} onMouseLeave={this.linkd_link} />
                </a>
                <a href='mailto:fnilsen1051@gmail.com'>
                    <img className='gmail_logo' src={gmail_logo} onMouseEnter={this.gmail_link} onMouseLeave={this.gmail_link} />
                </a>
            </div>
            <div className='link_cont'>
                <p className='git_link'>https://github.com/finnnilsen90</p>
                <p className='linkedin_link'>https://www.linkedin.com/in/finn-nilsen</p>
                <p className='gmail_link'>fnilsen1051@gmail.com</p>
            </div>
        </div>
        )
    }

}

module.exports = Footer;