const React = require('react');
const reactclass = require('create-react-class');
const css = require('./libcomp-styleguid.css');

const Hamburger = require('../../../lib/hamburger/hamburger.js');
const Button_one = require('../../../lib/button-one/button-one.js');
const Button_two = require('../../../lib/button-two/button-two.js');
const Content = require('../../../lib/content-dropdown/content-dropdown.js');
const Content_two = require('../../../lib/content-dropdown/content-dropdown.js');

var ____Classd=React.Component;for(var ____Classd____Key in ____Classd){if(____Classd.hasOwnProperty(____Classd____Key)){Libcomp[____Classd____Key]=____Classd[____Classd____Key];}}var ____SuperProtoOf____Classd=____Classd===null?null:____Classd.prototype;Libcomp.prototype=Object.create(____SuperProtoOf____Classd);Libcomp.prototype.constructor=Libcomp;Libcomp.__superConstructor__=____Classd;
    
    function Libcomp(props) {"use strict";
    ____Classd.call(this,props);
    this.state = {
            test: ''
        };


    }


     
    Object.defineProperty(Libcomp.prototype,"componentDidMount",{writable:true,configurable:true,value:function() {"use strict";

    }});
    Object.defineProperty(Libcomp.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";

        return (
        React.createElement("div", {className: "libcomp-styleguid_Container"}, 
            React.createElement("h2", {className: "header_comp"}, "Library components"), 
            React.createElement("div", {className: "hamburger_pos"}, 
                React.createElement(Hamburger, null)
            ), 
            React.createElement("div", {className: "button_top"}, 
                React.createElement(Button_one, {name: "Button", href: "/link"})
            ), 

            React.createElement("div", {className: "button_comp"}, 
                React.createElement(Button_two, {name: "Button", href: "/link"})
            ), 
            React.createElement("div", {className: "content-dropdown"}, 
                React.createElement(Content, {title: "Test Title", content: "Testing content", class: "test_one"})
            ), 
            React.createElement("div", {className: "content-dropdown"}, 
                React.createElement(Content_two, {title: "Test Title 2", content: "Testing content 2", class: "test_two"})
            )
        )
        )
    }});



module.exports = Libcomp;