const React = require('react');
const reactclass = require('create-react-class');
const css = require('./threecontent-home.css')

class Threecontent extends React.Component {
    
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
        <div className={'threecontent-home_Container'+' font'}>
      
        </div>
        )
    }

}

module.exports = Threecontent;