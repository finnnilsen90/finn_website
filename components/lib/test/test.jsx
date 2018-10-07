const React = require('react');
const reactclass = require('create-react-class');
const css = require('./test.css')

class Test extends React.Component {
    
    constructor(props) {
    super(props);
    this.state = {
            test: 0
        };

       this.click = this.click.bind(this)
    }

    click() {
        this.setState(chng => ({test:1}));
    }


    componentDidMount() {
        // document.querySelector('test').addEventListener('click', ()=> {
        //     this.click()
        // })

    }
    render() {

        return (
        <div className='test_Container'>
            <div className='test' onClick={this.click()}>{this.state.test}</div>
        </div>
        )
    }

}

module.exports = Test;