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
            err_message: []
        };
        this.message_status = this.message_status.bind(this)
        this.push_error = this.push_error.bind(this)
    }
 
    Object.defineProperty(Box.prototype,"message_status",{writable:true,configurable:true,value:function() {"use strict";
        let err_state = this.state.err_message;
        if (err_state.length>0) {
            
            return React.createElement(Message, {state: "error", class: "message font", message: err_state})

        }

    }});

    Object.defineProperty(Box.prototype,"push_error",{writable:true,configurable:true,value:function(e) {"use strict";
        let username = document.querySelector('.input_user');
        let password = document.querySelector('.input_pass');
        let message = document.querySelector('.msg_container');
        let err_arr = []
        
        if (username.value===undefined || username.value==='') {
            e.preventDefault()
            err_arr.push('Please input a username')
            message.style.display = 'block';
        } 

        if (password.value===undefined || password.value==='') {
            e.preventDefault()
            err_arr.push('Please input a password')
            message.style.display = 'block';
        } 

        this.setState({err_message: err_arr})

    }});

    Object.defineProperty(Box.prototype,"componentDidMount",{writable:true,configurable:true,value:function() {"use strict";

        let button = document.querySelector('.submit_log');
        let message = document.querySelector('.msg_container');

        button.addEventListener('click',function(e)  {
            let err_state = this.state.err_message;

            if (err_state.length>0) {
                this.setState({err_message: []})
                message.style.display = 'none';
            } 
            
            this.push_error(e)

        }.bind(this), false)
        
    }});

    Object.defineProperty(Box.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";

        return (
        React.createElement("div", {className: 'box-login_Container '+'font'}, 
            React.createElement("div", {className: "msg_container"}, 
                this.message_status()
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
                        React.createElement(Button_one, {name: "Login", href: "./", button_class: "submit_log", type: "submit", value: "Login"})
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