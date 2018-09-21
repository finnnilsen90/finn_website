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
            <h2>Color Pallet</h2>
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