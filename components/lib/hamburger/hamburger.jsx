const React = require('react');
const reactclass = require('create-react-class');
const css = require('./hamburger.css')

class Hamburger extends React.Component {
    
    constructor(props) {
    super(props);
    this.state = {
            hover: 0,
            toggle: true,
            links: {
                login: {
                    link: '/login',
                    className: 'link',
                    text: 'Login'
                },
                home_page: {
                    link: '/home_page',
                    className: 'link',
                    text: 'Home Page'
                },
                resume: {
                    link: '/resume',
                    className: 'link',
                    text: 'Resume'
                },
                projects: {
                    link: '/home_page',
                    className: 'link',
                    text: 'Projects'
                },
                contact: {
                    link: '/contact',
                    className: 'link',
                    text: 'Contact'
                }
            }
        };

        this.ham_enter = this.ham_enter.bind(this);
        this.ham_leave = this.ham_leave.bind(this);
        this.ham_click = this.ham_click.bind(this);

        this.links_compile = this.links_compile.bind(this);
        this.toggle = this.toggle.bind(this);


    }

    toggle() {
        let dropdown = document.querySelector('.dropdown');
        let state = this.state.toggle;

         this.setState(prevState => ({
            toggle: !prevState.toggle
        }));

        if (state) {
            dropdown.style.display= 'block';
        } else {
            dropdown.style.display= 'none';
        }
    }

    links_compile(input) {

        let value = Object.entries(input)
        let menu = []
        for (let i=0;i<value.length;i++) {
            menu.push(<li className={value[i][1].className} href={value[i][1].link}>{value[i][1].text}</li>);
        }

        return menu

    }

    ham_enter() {
        let color = "#2bff72";
        let num = this.state.hover;
        let chng_hr = document.querySelector('.hamburger');
        let clr_chng = chng_hr.childNodes;
        clr_chng[num].style.border="2px solid "+color;
        if (num < 2) {
            this.setState(chng => ({hover:num+1}));
            setTimeout(()=> {this.ham_enter()},100);
        } else {
            this.setState(chng => ({hover:0}));
        }
    }

    ham_leave() {

        let chng_hr = document.querySelector('.hamburger');
        let chng_child = document.querySelector('.hamburger').childNodes;

        for (let i=0;i<chng_child.length;i++) {
            chng_child[i].style.border="2px solid grey";
        }
        chng_hr.style.border="3px solid grey";

    }

    ham_click() {
        this.toggle();

        let toggle = this.state.toggle;
        let chng_hr = document.querySelector('.hamburger');
        let chng_child = document.querySelector('.hamburger').childNodes;

        if (toggle) {
            for (let i=0;i<chng_child.length;i++) {
                chng_child[i].style.border="2px solid #2bff72";
            }         
        } else {
            for (let i=0;i<chng_child.length;i++) {
                chng_child[i].style.border="2px solid grey";
            }
        }
    }
     
    componentDidMount() {

    }
    render() {

        return (
        <div className='libcomp-styleguid_Container'>
            <div className='ham_container'>
                <div className='hamburger' onMouseEnter={this.ham_enter} onMouseLeave={this.ham_leave} onClick={this.ham_click}>
                    <hr/>
                    <hr/>
                    <hr/>
                </div>
            </div>
            <div className='dropdown' onClick={this.toggle}>
                <ul>
                    {this.links_compile(this.state.links)}
                </ul>
            </div>
        </div>
        )
    }
}

module.exports = Hamburger;