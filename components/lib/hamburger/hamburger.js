const React = require('react');
const reactclass = require('create-react-class');
const css = require('./hamburger.css')

var ____Classc=React.Component;for(var ____Classc____Key in ____Classc){if(____Classc.hasOwnProperty(____Classc____Key)){Hamburger[____Classc____Key]=____Classc[____Classc____Key];}}var ____SuperProtoOf____Classc=____Classc===null?null:____Classc.prototype;Hamburger.prototype=Object.create(____SuperProtoOf____Classc);Hamburger.prototype.constructor=Hamburger;Hamburger.__superConstructor__=____Classc;
    
    function Hamburger(props) {"use strict";
    ____Classc.call(this,props);
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
        document.querySelector('.hamburger').addEventListener('mouseenter', function() {
            if(hvr_state===0) {
                this.hover("#2bff72")
            }
        }.bind(this))
        document.querySelector('.hamburger').addEventListener('mouseleave', function() {
            console.log(hvr_state);
            if(hvr_state===0) {
                this.hover("grey");
            }
            chng_hr.style.border="3px solid grey"
        }.bind(this))
        document.querySelector('.hamburger').addEventListener('click', function() {
            if(hvr_state===0) {
                chng_hr.style.border="3px solid #2bff72"
            }
        })
    }});
    Object.defineProperty(Hamburger.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";

        return (
        React.createElement("div", {className: "libcomp-styleguid_Container"}, 
            React.createElement("div", {className: "ham_container"}, 
                React.createElement("div", {className: "hamburger"}, 
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