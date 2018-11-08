const React = require('react');
const reactclass = require('create-react-class');
const css = require('./libcomp-styleguid.css');

const Hamburger = require('../../../lib/hamburger/hamburger.js');
const Button_one = require('../../../lib/button-one/button-one.js');
const Button_two = require('../../../lib/button-two/button-two.js');
const Content = require('../../../lib/content-dropdown/content-dropdown.js');
const Content_two = require('../../../lib/content-dropdown/content-dropdown.js');

class Libcomp extends React.Component {
    
    constructor(props) {
    super(props);
    this.state = {
            menu: {
                login: {
                    link: '/logout',
                    className: 'link',
                    text: 'Logout'
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

    }
     
    componentDidMount() {

    }
    render() {

        return (
        <div className='libcomp-styleguid_Container'>
            <h2 className='header_comp'>Library components</h2>
            <div className='hamburger_pos'>
                <Hamburger menu={this.state.menu}/>
            </div>

            <Button_one button_class='button_top' name='Button' href='/link' />

            <Button_one button_class='button_top_small' font_size='.9em' width='100px' name='Button' href='/link' />

            <Button_two button_class='button_comp' name='Button' href='/link' />

            <Button_two button_class='button_two_small' font_size='.9em' width='100px' name='Button' href='/link' />

            <div className='content-dropdown'>
                <Content title='Test Title' content='Testing content' class='test_one'/>
            </div>
            <div className='content-dropdown'>
                <Content_two title='Test Title 2' content='Testing content 2' class='test_two'/>
            </div>
        </div>
        )
    }

}

module.exports = Libcomp;