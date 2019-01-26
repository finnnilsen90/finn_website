const React = require('react');
const reactclass = require('create-react-class');
const css = require('./content-home.css')
let Profile = require("../../../../images/profile_pic.jpg");

let Slider = require('../slider-home/slider-home.js')

var ____Class3=React.Component;for(var ____Class3____Key in ____Class3){if(____Class3.hasOwnProperty(____Class3____Key)){Content[____Class3____Key]=____Class3[____Class3____Key];}}var ____SuperProtoOf____Class3=____Class3===null?null:____Class3.prototype;Content.prototype=Object.create(____SuperProtoOf____Class3);Content.prototype.constructor=Content;Content.__superConstructor__=____Class3;
    
    function Content(props) {"use strict";
    ____Class3.call(this,props);
    this.state = {
            test: ''
        };
       
    }
     

    Object.defineProperty(Content.prototype,"componentDidMount",{writable:true,configurable:true,value:function() {"use strict";
        
    }});
    Object.defineProperty(Content.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";

        return (
        React.createElement("div", {className: "content-home_Container"}, 
            React.createElement("img", {className: "profile", src: Profile}), 
            React.createElement(Slider, null)
        )
        )
    }});



module.exports = Content;