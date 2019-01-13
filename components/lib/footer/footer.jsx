const React = require('react');
const reactclass = require('create-react-class');
const css = require('./footer.css');

class Footer extends React.Component {
    
    constructor(props) {
    super(props);
    this.state = {
            links_invoked: '',
            test: '',
            links:  {
                login: {
                    link: '/login',
                    className: 'link_footer',
                    text: 'Login test'
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
        this.links_comp_two = this.links_comp_two.bind(this);
        this.chng_state = this.chng_state.bind(this);
       
    } 

    chng_state() {
        let prop = this.props.menu;

        if (prop) {
            return prop;
        } else {
            return this.state.links;
        }

    }

    links_compile(input) {

        let value = Object.entries(input)
        let menu = []
        let len = value.length>5?5:value.length;
        for (let i=0;i<len;i++) {
            menu.push(<li className={value[i][1].className+' link_footer'}><a href={value[i][1].link}>{value[i][1].text}</a></li>);
        }

        return menu

    }

    links_comp_two(input) {
        let value = Object.entries(input);
        let menu = []
        for (let i=5;i<value.length;i++) {
            menu.push(<li className={value[i][1].className+' link_footer'}><a href={value[i][1].link}>{value[i][1].text}</a></li>);
        }

        return menu

    }

    componentDidMount() {
        let nav_two = document.querySelector('.nav_two');
        if (Object.entries(this.chng_state()).length>5) {
            nav_two.style.display = 'block';
        }
    }
    render() {

        return (
        <div className={'footer_Container'+' font'}>
            <div className='nav'>
                <ul>
                    {this.links_compile(this.chng_state())}
                </ul>
            </div>
            <div className={'nav'+' nav_two'}>
                <ul>
                    {this.links_comp_two(this.chng_state())}
                </ul>
            </div>
        </div>
        )
    }

}

module.exports = Footer;