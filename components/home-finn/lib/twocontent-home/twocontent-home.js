const React = require('react');
const reactclass = require('create-react-class');
const css = require('./twocontent-home.css');
let Resume_icon = require("../../../../images/resume_icon.jpg");

let Slider = require('../slider-home/slider-home.js');
let Button = require('../../../lib/button-one/button-one.js');

var ____Classe=React.Component;for(var ____Classe____Key in ____Classe){if(____Classe.hasOwnProperty(____Classe____Key)){Twocontent[____Classe____Key]=____Classe[____Classe____Key];}}var ____SuperProtoOf____Classe=____Classe===null?null:____Classe.prototype;Twocontent.prototype=Object.create(____SuperProtoOf____Classe);Twocontent.prototype.constructor=Twocontent;Twocontent.__superConstructor__=____Classe;
    
    function Twocontent(props) {"use strict";
    ____Classe.call(this,props);
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
            React.createElement(Slider, null)
        )
        )
    }});



module.exports = Twocontent;