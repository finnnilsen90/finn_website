const React = require('react');
const reactclass = require('create-react-class');
const css = require('./libcomp-styleguid.css');

const menu = require('../../../../data_files/base_menu.json');

const Hamburger = require('../../../lib/hamburger/hamburger.js');
const Button_one = require('../../../lib/button-one/button-one.js');
const Button_two = require('../../../lib/button-two/button-two.js');
const Content = require('../../../lib/content-dropdown/content-dropdown.js');
const Content_two = require('../../../lib/content-dropdown/content-dropdown.js');

var ____Class7=React.Component;for(var ____Class7____Key in ____Class7){if(____Class7.hasOwnProperty(____Class7____Key)){Libcomp[____Class7____Key]=____Class7[____Class7____Key];}}var ____SuperProtoOf____Class7=____Class7===null?null:____Class7.prototype;Libcomp.prototype=Object.create(____SuperProtoOf____Class7);Libcomp.prototype.constructor=Libcomp;Libcomp.__superConstructor__=____Class7;
    
    function Libcomp(props) {"use strict";
    ____Class7.call(this,props);
    this.state = {
            json_menu: menu
        };

    }
     
    Object.defineProperty(Libcomp.prototype,"componentDidMount",{writable:true,configurable:true,value:function() {"use strict";

    }});
    Object.defineProperty(Libcomp.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";

        return (
        React.createElement("div", {className: "libcomp-styleguid_Container"}, 
            React.createElement("h2", {className: "header_comp"}, "Library components"), 
            React.createElement("div", {className: "hamburger_pos"}, 
                React.createElement(Hamburger, {menu: this.state.json_menu})
            ), 

            React.createElement(Button_one, {button_class: "button_top", name: "Button", href: "/link"}), 

            React.createElement(Button_one, {button_class: "button_top_small", font_size: ".9em", width: "100px", name: "Button", href: "/link"}), 

            React.createElement(Button_two, {button_class: "button_comp", name: "Button", href: "/link"}), 

            React.createElement(Button_two, {button_class: "button_two_small", font_size: ".9em", width: "100px", name: "Button", href: "/link"}), 

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