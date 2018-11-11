const React = require('react');
const reactclass = require('create-react-class');
const css = require('./form-submit.css')

class Form extends React.Component {
    
    constructor(props) {
    super(props);
    this.state = {
            test: ''
        };

         this.screenSize = this.screenSize.bind(this);
       
    }
     screenSize() {
        let screenWidth = window.innerWidth
        function respond() {
            if (screenWidth > 800) {
                return 'desktop';
            }
            if (screenWidth <= 800 && 500 < screenWidth) {
                return 'desktop small';
            }
            if (screenWidth <= 500){
                return 'mobile';
            }
            else {
                return 'screen size error';
            }
        }

        this.setState(chng => ({
            test: respond()
        }));
    }; 

    componentDidMount() {
        this.screenSize(),
        window.addEventListener('resize', () => this.screenSize())
    }
    render() {

        return (
        <div className='form-submit_Container'>
            <div className='test'>{this.state.test}</div>
        </div>
        )
    }

}

module.exports = Form;