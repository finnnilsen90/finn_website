const React = require('react');
const reactclass = require('create-react-class');
const css = require('./box-login.css')

const Button_one = require('../../../lib/button-one/button-one.js');
const Message = require('../../../lib/message/message.js');

var ____Class0=React.Component;for(var ____Class0____Key in ____Class0){if(____Class0.hasOwnProperty(____Class0____Key)){Box[____Class0____Key]=____Class0[____Class0____Key];}}var ____SuperProtoOf____Class0=____Class0===null?null:____Class0.prototype;Box.prototype=Object.create(____SuperProtoOf____Class0);Box.prototype.constructor=Box;Box.__superConstructor__=____Class0;
    
    function Box(props) {"use strict";
    ____Class0.call(this,props);
    this.state = {
            status: null,
            message: null
        };
        this.message_status = this.message_status.bind(this)
    }
 
    Object.defineProperty(Box.prototype,"message_status",{writable:true,configurable:true,value:function(status) {"use strict";
        let msg_state = status || null;
        if (msg_state!==null) {
            
            return React.createElement(Message, {state: msg_state, class: "message font", message: "This is an error message!"})

        }

    }});

    Object.defineProperty(Box.prototype,"componentDidMount",{writable:true,configurable:true,value:function() {"use strict";
        
    }});

    Object.defineProperty(Box.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";

        return (
        React.createElement("div", {className: 'box-login_Container '+'font'}, 
            React.createElement("div", {className: "msg_container"}, 
                this.message_status('okay')
            ), 
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