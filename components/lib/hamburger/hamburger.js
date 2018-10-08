const React = require('react');
const reactclass = require('create-react-class');
const css = require('./hamburger.css')

var ____Classr=React.Component;for(var ____Classr____Key in ____Classr){if(____Classr.hasOwnProperty(____Classr____Key)){Hamburger[____Classr____Key]=____Classr[____Classr____Key];}}var ____SuperProtoOf____Classr=____Classr===null?null:____Classr.prototype;Hamburger.prototype=Object.create(____SuperProtoOf____Classr);Hamburger.prototype.constructor=Hamburger;Hamburger.__superConstructor__=____Classr;
    
    function Hamburger(props) {"use strict";
    ____Classr.call(this,props);
this.state = {
            hover: 0
        };

        this.ham_enter = this.ham_enter.bind(this);
        this.ham_leave = this.ham_leave.bind(this)
        this.ham_click = this.ham_click.bind(this)

    }

    Object.defineProperty(Hamburger.prototype,"ham_enter",{writable:true,configurable:true,value:function() {"use strict";
        let color = "#2bff72";
        let num = this.state.hover;
        let chng_hr = document.querySelector('.hamburger');
        let clr_chng = chng_hr.childNodes;
        clr_chng[num].style.border="2px solid "+color;
        if (num < 2) {
            this.setState(function(chng)  {return {hover:num+1};});
            setTimeout(function() {this.ham_enter(color)}.bind(this),100);
        } else {
            this.setState(function(chng)  {return {hover:0};});
        }
    }});

    Object.defineProperty(Hamburger.prototype,"ham_leave",{writable:true,configurable:true,value:function(color) {"use strict";

        let chng_hr = document.querySelector('.hamburger');
        let chng_child = document.querySelector('.hamburger').childNodes;

        for (let i=0;i<chng_child.length;i++) {
            chng_child[i].style.border="2px solid grey";
        }
        chng_hr.style.border="3px solid grey";

    }});

    Object.defineProperty(Hamburger.prototype,"ham_click",{writable:true,configurable:true,value:function() {"use strict";
        let chng_hr = document.querySelector('.hamburger');
        chng_hr.style.border="3px solid #2bff72";
    }});
     
    Object.defineProperty(Hamburger.prototype,"componentDidMount",{writable:true,configurable:true,value:function() {"use strict";
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
    }});
    Object.defineProperty(Hamburger.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";

        return (
        React.createElement("div", {className: "libcomp-styleguid_Container"}, 
            React.createElement("div", {className: "ham_container"}, 
                React.createElement("div", {className: "hamburger", onMouseEnter: this.ham_enter, onMouseLeave: this.ham_leave, onClick: this.ham_click}, 
                    React.createElement("hr", null), 
                    React.createElement("hr", null), 
                    React.createElement("hr", null)
                ), 
                React.createElement("div", {className: "dropdown"}

                )
            )
        )
        )
    }});


module.exports = Hamburger;