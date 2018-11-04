const React = require('react');
const reactclass = require('create-react-class');
const css = require('./libcomp-styleguid.css');

const Hamburger = require('../../../lib/hamburger/hamburger.js');
const Button_one = require('../../../lib/button-one/button-one.js');
const Button_two = require('../../../lib/button-two/button-two.js');
const Content = require('../../../lib/content-dropdown/content-dropdown.js');
const Content_two = require('../../../lib/content-dropdown/content-dropdown.js');

var ____Class0=React.Component;for(var ____Class0____Key in ____Class0){if(____Class0.hasOwnProperty(____Class0____Key)){Libcomp[____Class0____Key]=____Class0[____Class0____Key];}}var ____SuperProtoOf____Class0=____Class0===null?null:____Class0.prototype;Libcomp.prototype=Object.create(____SuperProtoOf____Class0);Libcomp.prototype.constructor=Libcomp;Libcomp.__superConstructor__=____Class0;
    
    function Libcomp(props) {"use strict";
    ____Class0.call(this,props);
    this.state = {
            menu: {
                login: {
                    link: '/logout',
                    className: 'link',
                    text: 'Logout'
                },
                home_page: {
                    link: '/home_page',
                    className: 'link',
                    text: 'Home Page'
                },
                resume: {
                    link: '/resume',
                    className: 'link',
                    text: 'Resume'
                },
                projects: {
                    link: '/home_page',
                    className: 'link',
                    text: 'Projects'
                },
                contact: {
                    link: '/contact',
                    className: 'link',
                    text: 'Contact'
                }
            } 
        };

    }
     
    Object.defineProperty(Libcomp.prototype,"componentDidMount",{writable:true,configurable:true,value:function() {"use strict";

    }});
    Object.defineProperty(Libcomp.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";

        return (
        React.createElement("div", {className: "libcomp-styleguid_Container"}, 
            React.createElement("h2", {className: "header_comp"}, "Library components"), 
            React.createElement("div", {className: "hamburger_pos"}, 
                React.createElement(Hamburger, {menu: this.state.menu})
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