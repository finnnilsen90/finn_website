const React = require('react');
const reactclass = require('create-react-class');
const css = require('./content-home.css')
let Profile = require("../../../../images/profile_pic.jpg");

let Slider = require('../slider-home/slider-home.js')

var ____Class6=React.Component;for(var ____Class6____Key in ____Class6){if(____Class6.hasOwnProperty(____Class6____Key)){Content[____Class6____Key]=____Class6[____Class6____Key];}}var ____SuperProtoOf____Class6=____Class6===null?null:____Class6.prototype;Content.prototype=Object.create(____SuperProtoOf____Class6);Content.prototype.constructor=Content;Content.__superConstructor__=____Class6;
    
    function Content(props) {"use strict";
    ____Class6.call(this,props);
    this.state = {
            test: ''
        };
       
    }
     

    Object.defineProperty(Content.prototype,"componentDidMount",{writable:true,configurable:true,value:function() {"use strict";
        
    }});
    Object.defineProperty(Content.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";

        return (
        React.createElement("div", {className: 'content-home_Container '+'font'}, 
            React.createElement("img", {className: "profile", src: Profile}), 
            React.createElement("p", {className: "overview-finn"}, 
                "My name is Finn Nilsen. I have been working in the tech industry for 5+ years in a variety of roles. I’ve been a software developer, digital marketer, and product manager. I have a passion for building great software products and leading technical teams. This website is an overview of my career so far and how I can help any company I work with grow."
            )
        )
        )
    }});



module.exports = Content;