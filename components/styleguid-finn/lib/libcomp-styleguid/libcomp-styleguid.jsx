const React = require('react');
const reactclass = require('create-react-class');
const css = require('./libcomp-styleguid.css');

let Hamburger = require('../../../lib/hamburger/hamburger.js');

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
        </div>
        )
    }

}

module.exports = Libcomp;