const React = require('react');
const reactclass = require('create-react-class');
const css = require('./hamburger.css')

class Hamburger extends React.Component {
    
    constructor(props) {
    super(props);
this.state = {
            hover: 0
        };

        this.ham_enter = this.ham_enter.bind(this);
        this.ham_leave = this.ham_leave.bind(this)
        this.ham_click = this.ham_click.bind(this)

    }

    ham_enter() {
        let color = "#2bff72";
        let num = this.state.hover;
        let chng_hr = document.querySelector('.hamburger');
        let clr_chng = chng_hr.childNodes;
        clr_chng[num].style.border="2px solid "+color;
        if (num < 2) {
            this.setState(chng => ({hover:num+1}));
            setTimeout(()=> {this.ham_enter(color)},100);
        } else {
            this.setState(chng => ({hover:0}));
        }
    }

    ham_leave(color) {

        let chng_hr = document.querySelector('.hamburger');
        let chng_child = document.querySelector('.hamburger').childNodes;

        for (let i=0;i<chng_child.length;i++) {
            chng_child[i].style.border="2px solid grey";
        }
        chng_hr.style.border="3px solid grey";

    }

    ham_click() {
        let chng_hr = document.querySelector('.hamburger');
        chng_hr.style.border="3px solid #2bff72";
    }
     
    componentDidMount() {
        // let chng_hr = document.querySelector('.hamburger');
        // let hvr_state = this.state.hover;
        // document.getElementById('hamburger').addEventListener('mouseenter', ()=> {
        //     if(hvr_state===0) {
        //         this.hover("#2bff72")
        //     }
        // })
        // document.getElementById('hamburger').addEventListener('mouseleave', ()=> {
        //     console.log(hvr_state);
        //     if(hvr_state===0) {
        //         this.hover("grey");
        //     }
        //     chng_hr.style.border="3px solid grey"
        // })
        // document.getElementById('hamburger').addEventListener('click', ()=> {
        //     if(hvr_state===0) {
        //         chng_hr.style.border="3px solid #2bff72"
        //     }
        // })
    }
    render() {

        return (
        <div className='libcomp-styleguid_Container'>
            <div className='ham_container'>
                <div className='hamburger' onMouseEnter={this.ham_enter} onMouseLeave={this.ham_leave} onClick={this.ham_click}>
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