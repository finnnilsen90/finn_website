var React = require('react');
var reactClass = require('create-react-class');
var ReactDom = require('react-dom');
var css = require('./compName.css')

const ChildConst = require('./lib/child/child.js')

class VarName extends React.Component {
    
    constructor(props) {
    super(props);
    this.state = {
            test: 'Test'
        };
    
    }
    
    render() {
        
        return (
            <div className='containter'>
                <ChildConst />
            </div>
        )
    }

};

module.exports = VarName;

ReactDom.render(<VarName />, document.querySelector('.compName') || document.createElement('div'));

