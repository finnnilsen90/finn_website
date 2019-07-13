const React = require('react');
const reactclass = require('create-react-class');
const css = require('./outline-resume.css')

class Outline extends React.Component {
    
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
        <div className={'outline-resume_Container '+'font'}>

            <h1 className='header'>Resume</h1>
           
        </div>
        )
    }

}

module.exports = Outline;