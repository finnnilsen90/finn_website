const React = require('react');
const reactclass = require('create-react-class');
const css = require('./footer.css');

class Footer extends React.Component {
    
    constructor(props) {
    super(props);
    this.state = {
            test: '',
            links:  {
                login: {
                    link: '/logout',
                    className: 'link_footer',
                    text: 'Logout'
                },
                home_page: {
                    link: '/home_page',
                    className: 'link_footer',
                    text: 'Home Page'
                },
                resume: {
                    link: '/resume',
                    className: 'link_footer',
                    text: 'Resume'
                },
                projects: {
                    link: '/home_page',
                    className: 'link_footer',
                    text: 'Projects'
                },
                contact: {
                    link: '/contact',
                    className: 'link_footer',
                    text: 'Contact'
                }
            }
        };

        this.links_compile = this.links_compile.bind(this);
       
    } 

    links_compile(input) {

        let value = Object.entries(input)
        let menu = []
        for (let i=0;i<value.length;i++) {
            menu.push(<li className={value[i][1].className} href={value[i][1].link}>{value[i][1].text}</li>);
        }

        return menu

    }

    componentDidMount() {

    }
    render() {

        return (
        <div className='footer_Container'>
            <div className='nav'>
                <ul>
                    {this.links_compile(this.state.links)}
                </ul>
            </div>
        </div>
        )
    }

}

module.exports = Footer;