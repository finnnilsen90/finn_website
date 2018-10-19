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
            test: ''
        };


    }


     
    componentDidMount() {

    }
    render() {

        return (
        <div className='libcomp-styleguid_Container'>
            <h2 className='header_comp'>Library components</h2>
            <div className='hamburger_pos'>
                <Hamburger />
            </div>
            <div className='button_top'>
                <Button_one name='Button' href='/link' />
            </div>

            <div className='button_comp'>
                <Button_two name='Button' href='/link' />
            </div>
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