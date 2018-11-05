const React = require('react');
const reactclass = require('create-react-class');
const css = require('./button-two.css')

class Button extends React.Component {
    
    constructor(props) {
    super(props);
    this.state = {
        height: null
    };

        this.dimension = this.dimension.bind(this)
    }

    dimension() {
        let width_prop = this.props.width;
        let font_size = this.props.font_size;

        if (width_prop!==undefined) {

            let width_num = parseInt(width_prop.slice(0));
            let height_num = width_num*.43;
            let height_prop = String(height_num)+'px'

            this.setState({height: height_prop})

            document.querySelector('.'+this.props.button_class).style.width = width_prop;
            document.querySelector('.'+this.props.button_class).style.height = height_prop;
            document.querySelector('.'+this.props.button_class).style.fontSize = font_size;

        }

    }

    componentWillMount() {
        
    }

    componentDidMount() {
    
        
        setTimeout(() => {
            this.dimension()
        }, 10)
        
    }
    render() {

        return (
        <div className='button-two_Container'>
            <button className={'button_style_two '+this.props.button_class} href={this.props.href} type={this.props.type} value={this.props.value}>{this.props.name}</button>
        </div>
        )
    }

}

module.exports = Button;