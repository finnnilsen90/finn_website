const React = require('react');
const reactclass = require('create-react-class');
const css = require('./content-dropdown.css')

class Content extends React.Component {
    
    constructor(props) {
    super(props);
    this.state = {
            arrow: false,
            arw: null,
            arw_click: null,
            cont_par: null,
            cont_hr: null
        };

        this.random = this.random.bind(this);
        this.arrow_state = this.arrow_state.bind(this);
       
    }

    random() {
        let rand = this.props.class
        
        this.setState(() => ({
            arw: 'arw_'+rand,
            arw_click: 'arw_click_'+rand,
            cont_par: 'cont_par_'+rand,
            cont_hr: 'cont_hr_'+rand 
        }))
    }

    arrow_state() {
        // let arrow = document.querySelector('.arrow');
        // let arrow_click = document.querySelector('.arrow_click');

        this.setState(chng => ({
            arrow: !chng.arrow
        }));
        let state = this.state.arrow;

        if (state) {
            document.querySelector('.'+this.state.arw).style.display = 'block';
            document.querySelector('.'+this.state.cont_hr).style.display = 'block';
            document.querySelector('.'+this.state.cont_par).style.display = 'none';
            document.querySelector('.'+this.state.arw_click).style.display = 'none';
        } else {
            document.querySelector('.'+this.state.arw).style.display = 'none';
            document.querySelector('.'+this.state.cont_hr).style.display = 'none';
            document.querySelector('.'+this.state.cont_par).style.display = 'block';
            document.querySelector('.'+this.state.arw_click).style.display = 'block';
        }
            
    }

    componentWillMount() {
        this.random()
    }

    componentDidMount() {
        
    }
    render() {

        return (
        <div className='content-dropdown_Container'>
            <h3 className='title'>{this.props.title}</h3>
            <div className={'arrow '+this.state.arw} onClick={this.arrow_state}></div>
            <div className={'arrow_click '+this.state.arw_click} onClick={this.arrow_state}></div>
            <hr className={'content_hr '+this.state.cont_hr} />
            <div className={'content_parent '+this.state.cont_par}>
                <p>{this.props.content}</p>
            </div>
        </div>
        )
    }

}

module.exports = Content;