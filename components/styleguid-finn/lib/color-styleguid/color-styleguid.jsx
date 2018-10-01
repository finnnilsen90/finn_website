const React = require('react');
const reactclass = require('create-react-class');
const css = require('./color-styleguid.css')

class Color extends React.Component {
    
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
        <div className='color-styleguid_Container'>
            <h1>Style Guide</h1>
            <div className='header_container'>
                <h2 className='header'>Color Pallet</h2>
            </div>
            <div className={'primary_color '+'color_dimension'}></div>
            <div className={'secondary_color '+'color_dimension'}></div>
            <div className={'background_color '+'color_dimension'}></div>
            <div className={'secondary_background_color '+'color_dimension'}></div>
            <div className={'offset '+'color_dimension'}></div>
        </div>
        )
    }

}

module.exports = Color;