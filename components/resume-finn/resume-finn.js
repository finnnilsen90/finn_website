var React = require('react');
var reactClass = require('create-react-class');
var ReactDom = require('react-dom');
var css = require('./resume-finn.css')

const Hamburger = require('../lib/hamburger/hamburger.js');
const Outline = require('./lib/outline-resume/outline-resume.js');
const Footer = require('../lib/footer/footer.js');

var ____Class3=React.Component;for(var ____Class3____Key in ____Class3){if(____Class3.hasOwnProperty(____Class3____Key)){Resume[____Class3____Key]=____Class3[____Class3____Key];}}var ____SuperProtoOf____Class3=____Class3===null?null:____Class3.prototype;Resume.prototype=Object.create(____SuperProtoOf____Class3);Resume.prototype.constructor=Resume;Resume.__superConstructor__=____Class3;
    
    function Resume(props) {"use strict";
    ____Class3.call(this,props);
    this.state = {
            test: 'Test'
        };
    
    }
    
    Object.defineProperty(Resume.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
        
        return (
            React.createElement("div", {className: "container"}, 
                React.createElement(Hamburger, {menu: this.state.fetch}), 
                React.createElement(Outline, null), 
                React.createElement(Footer, {menu: this.state.fetch})
            )
        )
    }});

;

module.exports = Resume;

ReactDom.render(React.createElement(Resume, null), document.querySelector('.resume-finn') || document.createElement('div'));

