const React = require('react');
const reactclass = require('create-react-class');
const css = require('./box-login.css')

const Button_one = require('../../../lib/button-one/button-one.js');

var ____Class2=React.Component;for(var ____Class2____Key in ____Class2){if(____Class2.hasOwnProperty(____Class2____Key)){Box[____Class2____Key]=____Class2[____Class2____Key];}}var ____SuperProtoOf____Class2=____Class2===null?null:____Class2.prototype;Box.prototype=Object.create(____SuperProtoOf____Class2);Box.prototype.constructor=Box;Box.__superConstructor__=____Class2;
    
    function Box(props) {"use strict";
    ____Class2.call(this,props);
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
                        React.createElement("input", {className: 'input_user '+'font '+'input_css', type: "text", name: "username"})
                    ), 
                    React.createElement("div", {className: "input_box"}, 
                        React.createElement("label", {className: 'password '+'label'+' font'}, "Password"), 
                        React.createElement("input", {className: 'input_pass '+'font '+'input_css', type: "password", name: "password"})
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