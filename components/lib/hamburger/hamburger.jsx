const React = require('react');
const reactclass = require('create-react-class');
const css = require('./hamburger.css')

class Hamburger extends React.Component {
    
    constructor(props) {
    super(props);
    this.state = {
            hover: 0,
            toggle: true,
        };

        this.ham_click = this.ham_click.bind(this);
        this.links_compile = this.links_compile.bind(this);

    }

    links_compile(input) {

        if (input!==undefined) {
            let value = Object.entries(input)
            let menu = []
            for (let i=0;i<value.length;i++) {
                menu.push(<li className={value[i][1].className} href={value[i][1].link}>{value[i][1].text}</li>);
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

    return_error(menu) {
        menu===undefined?console.error('please pass a menu object'):null;
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
        <div className='libcomp-hamburger_Container'>
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