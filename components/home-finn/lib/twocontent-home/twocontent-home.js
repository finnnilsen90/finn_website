const React = require('react');
const reactclass = require('create-react-class');
const css = require('./twocontent-home.css');
let Resume_icon = require("../../../../images/resume_icon.jpg");

let Slider = require('../slider-home/slider-home.js');
let Button = require('../../../lib/button-one/button-one.js');

var ____Class1=React.Component;for(var ____Class1____Key in ____Class1){if(____Class1.hasOwnProperty(____Class1____Key)){Twocontent[____Class1____Key]=____Class1[____Class1____Key];}}var ____SuperProtoOf____Class1=____Class1===null?null:____Class1.prototype;Twocontent.prototype=Object.create(____SuperProtoOf____Class1);Twocontent.prototype.constructor=Twocontent;Twocontent.__superConstructor__=____Class1;
    
    function Twocontent(props) {"use strict";
    ____Class1.call(this,props);
    this.state = {
            test: ''
        };
       
    }
     

    Object.defineProperty(Twocontent.prototype,"componentDidMount",{writable:true,configurable:true,value:function() {"use strict";

        
    }});;

    Object.defineProperty(Twocontent.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";

        return (
        React.createElement("div", {className: 'twocontent-home_Container'+' font'}, 
            React.createElement("h1", {className: "resume_header"}, React.createElement("a", {href: "/resume"}, "Resume")), 
            React.createElement("img", {className: "resume_icon", src: Resume_icon}), 
            React.createElement(Slider, null), 
            React.createElement(Button, {button_class: "btn_mobile", href: "/resume", name: "View Resume"})
        )
        )
    }});



module.exports = Twocontent;