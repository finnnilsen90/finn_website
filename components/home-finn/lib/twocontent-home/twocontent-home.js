const React = require('react');
const reactclass = require('create-react-class');
const css = require('./twocontent-home.css');
let Resume_icon = require("../../../../images/resume_icon.jpg");

let Slider = require('../slider-home/slider-home.js');
let Button = require('../../../lib/button-one/button-one.js');

var ____Classj=React.Component;for(var ____Classj____Key in ____Classj){if(____Classj.hasOwnProperty(____Classj____Key)){Twocontent[____Classj____Key]=____Classj[____Classj____Key];}}var ____SuperProtoOf____Classj=____Classj===null?null:____Classj.prototype;Twocontent.prototype=Object.create(____SuperProtoOf____Classj);Twocontent.prototype.constructor=Twocontent;Twocontent.__superConstructor__=____Classj;
    
    function Twocontent(props) {"use strict";
    ____Classj.call(this,props);
    this.state = {
            test: ''
        };
       
    }
     

    Object.defineProperty(Twocontent.prototype,"componentDidMount",{writable:true,configurable:true,value:function() {"use strict";

        let button = document.querySelector('.resume_btn');

        button.addEventListener('click', function()  {
            window.location.href = '/resume';
        });
        
    }});;

    Object.defineProperty(Twocontent.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";

        return (
        React.createElement("div", {className: 'twocontent-home_Container'+' font'}, 
            React.createElement("img", {className: "resume_icon", src: Resume_icon}), 
            React.createElement(Slider, null), 
            React.createElement(Button, {name: "Resume", button_class: "resume_btn"})
        )
        )
    }});



module.exports = Twocontent;