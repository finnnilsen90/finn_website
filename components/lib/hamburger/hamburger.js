const React = require('react');
const reactclass = require('create-react-class');
const css = require('./hamburger.css')

var ____Classb=React.Component;for(var ____Classb____Key in ____Classb){if(____Classb.hasOwnProperty(____Classb____Key)){Hamburger[____Classb____Key]=____Classb[____Classb____Key];}}var ____SuperProtoOf____Classb=____Classb===null?null:____Classb.prototype;Hamburger.prototype=Object.create(____SuperProtoOf____Classb);Hamburger.prototype.constructor=Hamburger;Hamburger.__superConstructor__=____Classb;
    
    function Hamburger(props) {"use strict";
    ____Classb.call(this,props);
this.state = {
            hover: 0
        };

        this.hover = this.hover.bind(this)

    }

    Object.defineProperty(Hamburger.prototype,"hover",{writable:true,configurable:true,value:function(color) {"use strict";
        let num = this.state.hover;
        let chng_hr = document.querySelector('.hamburger');
        let clr_chng = chng_hr.childNodes;
        clr_chng[num].style.border="2px solid "+color;
        if (num < 2) {
            this.setState(function(chng)  {return {hover:num+1};});
            setTimeout(function() {this.hover(color)}.bind(this),100);
            return num+1;
        } else {
            this.setState(function(chng)  {return {hover:0};});
            return 0
        }
    }});
     
    Object.defineProperty(Hamburger.prototype,"componentDidMount",{writable:true,configurable:true,value:function() {"use strict";
        let chng_hr = document.querySelector('.hamburger');
        let hvr_state = this.state.hover;
        document.getElementById('hamburger').addEventListener('mouseenter', function() {
            if(hvr_state===0) {
                this.hover("#2bff72")
            }
        }.bind(this))
        document.getElementById('hamburger').addEventListener('mouseleave', function() {
            console.log(hvr_state);
            if(hvr_state===0) {
                this.hover("grey");
            }
            chng_hr.style.border="3px solid grey"
        }.bind(this))
        document.getElementById('hamburger').addEventListener('click', function() {
            if(hvr_state===0) {
                chng_hr.style.border="3px solid #2bff72"
            }
        })
    }});
    Object.defineProperty(Hamburger.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";

        return (
        React.createElement("div", {className: "libcomp-styleguid_Container"}, 
            React.createElement("div", {className: "ham_container"}, 
                React.createElement("div", {id: "hamburger"}, 
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