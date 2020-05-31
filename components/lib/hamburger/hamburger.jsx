const React = require('react');
const reactclass = require('create-react-class');
const css = require('./hamburger.css')

class Hamburger extends React.Component {
    
    constructor(props) {
    super(props);
    this.state = {
            hover: 0,
            toggle: true,
            default:  { 
                        home_page: {
                            link: '/home',
                            className: 'link',
                            text: 'Home Page'
                        },
                        resume: {
                            link: '/resume',
                            className: 'link',
                            text: 'Resume'
                        },
                        projects: {
                            link: '/project',
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

        this.ham_click = this.ham_click.bind(this);
        this.links_compile = this.links_compile.bind(this);

    }

    links_compile(input) {

        let new_input = input || this.state.default;
        if (typeof(new_input)==='object') {
            let value = Object.entries(new_input);
            let menu = []
            for (let i=0;i<value.length;i++) {
                menu.push(<li className={value[i][1].className+' ham_link'} ><a className='a_link' href={value[i][1].link}>{value[i][1].text}</a></li>);
            }

            return menu

        } else {

            let example = {menu: {
                    button_one: {
                        link: 'navigation link',
                        className: 'class of element',
                        text: 'what goes in the button'
                    },
                    button_two: {
                        link: 'navigation link',
                        className: 'class of element',
                        text: 'what goes in the button'
                    }
                }
            }

            console.error('please pass a menu object');
            console.log('Please use the bellow object framework');
            console.log(example)
            console.log('once the object is made please pass it as a prop in the react state.')

            
        }

    }

    return_error(input) {
    
        menu!==Object?console.error('please pass a menu object'):null;
    }

    ham_click() {
        let chng_hr = document.querySelector('.hamburger');
        let chng_child = document.querySelector('.hamburger').childNodes;
        let dropdown = document.querySelector('.dropdown');
        let state = this.state.toggle;
        if (state) {
            dropdown.style.display= 'block';

            for (let i=0;i<chng_child.length;i++) {
                chng_child[i].style.border="2px solid #2bff72";
            }
            
            this.setState(prevState => ({
                toggle: !prevState.toggle
            }));
        } else {
            dropdown.style.display= 'none';

            for (let i=0;i<chng_child.length;i++) {
                chng_child[i].style.border="2px solid grey";
            }

            this.setState(prevState => ({
                toggle: !prevState.toggle
            }));
        }
         
    }
     
    componentDidMount() {

    }
    render() {

        return (
        <div className={'libcomp-hamburger_Container '+'font'}>
            <div className='ham_container'>
                <div className='hamburger' onMouseLeave={this.ham_click} onMouseEnter={this.ham_click}>
                    <hr/>
                    <hr/>
                    <hr/>
                </div>
            </div>
            <div className='dropdown_container'>
                <ul className='dropdown' onMouseLeave={this.ham_click}>
                    {this.links_compile(this.props.menu)}
                </ul>
            </div>
        </div>
        )
    }
}

module.exports = Hamburger;