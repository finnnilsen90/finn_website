const React = require('react');
const reactclass = require('create-react-class');
const css = require('./box-login.css')

const Button_one = require('../../../lib/button-one/button-one.js');

var ____ClassN=React.Component;for(var ____ClassN____Key in ____ClassN){if(____ClassN.hasOwnProperty(____ClassN____Key)){Box[____ClassN____Key]=____ClassN[____ClassN____Key];}}var ____SuperProtoOf____ClassN=____ClassN===null?null:____ClassN.prototype;Box.prototype=Object.create(____SuperProtoOf____ClassN);Box.prototype.constructor=Box;Box.__superConstructor__=____ClassN;
    
    function Box(props) {"use strict";
    ____ClassN.call(this,props);
    this.state = {
            test: ''
        };
       
    }
 

    Object.defineProperty(Box.prototype,"componentDidMount",{writable:true,configurable:true,value:function() {"use strict";

    }});

    Object.defineProperty(Box.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";

        return (
        React.createElement("div", {className: 'box-login_Container '+'font'}, 
            React.createElement("div", {className: "box"}, 
                React.createElement("form", {action: "/login", method: "post", className: "box_form"}, 
                     React.createElement("div", {className: "input_box"}, 
                        React.createElement("label", {className: 'username '+'label'+' font'}, "Username"), 
                        React.createElement("input", {className: "input_user", type: "text", name: "username"})
                    ), 
                    React.createElement("div", {className: "input_box"}, 
                        React.createElement("label", {className: 'password '+'label'+' font'}, "Password"), 
                        React.createElement("input", {className: "input_pass", type: "password", name: "password"})
                    ), 

                    React.createElement("div", {className: "button"}, 
                        React.createElement(Button_one, {name: "Login", href: "./", type: "submit", value: "Login"})
                    ), 
                    React.createElement("div", {className: "request"}, 
                        React.createElement("a", {href: "/", className: "font"}, "Request Login")
                    )

                )

            )
        )
        )
    }});



module.exports = Box;