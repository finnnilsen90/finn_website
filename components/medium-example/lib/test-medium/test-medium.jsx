const React = require('react');
const reactclass = require('create-react-class');
const css = require('./test-medium.css')

class Test extends React.Component {
    
    constructor(props) {
    super(props);
    this.state = {
            disabled: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            disabled: !this.state.disabled,
        });
    };
    componentDidMount() {
        let test = document.querySelector('button');
        window.addEventListener('resize', (x) => {
            console.log('ran')
        })
    }

    render() {
        return (
        <div>
            <button type="button" onClick={this.handleClick}>
            First Button
            </button>
            <button type="button" disabled={this.state.disabled}>
            Second Button
            </button>
        </div>
        );
    }

}

module.exports = Test;