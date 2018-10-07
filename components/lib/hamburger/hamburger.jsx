const React = require('react');
const reactclass = require('create-react-class');
const css = require('./hamburger.css')

class Hamburger extends React.Component {
    
    constructor(props) {
    super(props);
this.state = {
            hover: 0
        };

        this.hover = this.hover.bind(this)

    }

    hover(color) {
        let num = this.state.hover;
        let chng_hr = document.querySelector('.hamburger');
        let clr_chng = chng_hr.childNodes;
        clr_chng[num].style.border="2px solid "+color;
        if (num < 2) {
            this.setState(chng => ({hover:num+1}));
            setTimeout(()=> {this.hover(color)},100);
            return num+1;
        } else {
            this.setState(chng => ({hover:0}));
            return 0
        }
    }
     
    componentDidMount() {
        let chng_hr = document.querySelector('.hamburger');
        let hvr_state = this.state.hover;
        document.getElementById('hamburger').addEventListener('mouseenter', ()=> {
            if(hvr_state===0) {
                this.hover("#2bff72")
            }
        })
        document.getElementById('hamburger').addEventListener('mouseleave', ()=> {
            console.log(hvr_state);
            if(hvr_state===0) {
                this.hover("grey");
            }
            chng_hr.style.border="3px solid grey"
        })
        document.getElementById('hamburger').addEventListener('click', ()=> {
            if(hvr_state===0) {
                chng_hr.style.border="3px solid #2bff72"
            }
        })
    }
    render() {

        return (
        <div className='libcomp-styleguid_Container'>
            <div className='ham_container'>
                <div id='hamburger'>
                    <hr/>
                    <hr/>
                    <hr/>
                </div>
                <div className='dropdown'>

                </div>
            </div>
        </div>
        )
    }
}

module.exports = Hamburger;