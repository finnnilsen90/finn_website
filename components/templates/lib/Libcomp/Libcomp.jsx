const React = require('react');
const reactclass = require('create-react-class');
const css = require('./Libcomp.css')

class ChildConst extends React.Component {
    
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
        <div className={'Libcomp_Container'+' font'}>
            <h1 className='header'>Template</h1>
            <div className='test_content'>
                Test
            </div>
        </div>
        )
    }

}

module.exports = ChildConst;