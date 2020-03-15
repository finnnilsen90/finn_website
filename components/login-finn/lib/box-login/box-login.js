const React = require('react');
const reactclass = require('create-react-class');
const css = require('./box-login.css')

const Button_one = require('../../../lib/button-one/button-one.js');
const Message = require('../../../lib/message/message.js');

var ____ClassC=React.Component;for(var ____ClassC____Key in ____ClassC){if(____ClassC.hasOwnProperty(____ClassC____Key)){Box[____ClassC____Key]=____ClassC[____ClassC____Key];}}var ____SuperProtoOf____ClassC=____ClassC===null?null:____ClassC.prototype;Box.prototype=Object.create(____SuperProtoOf____ClassC);Box.prototype.constructor=Box;Box.__superConstructor__=____ClassC;
    
    function Box(props) {"use strict";
    ____ClassC.call(this,props);
    this.state = {
            status: null,
            err_message: [],
            auth_status: (new URL(document.location)).searchParams.get('valid')
        };
        this.message_status = this.message_status.bind(this);
        this.server_login = this.server_login.bind(this);
    }

    Object.defineProperty(Box.prototype,"server_login",{writable:true,configurable:true,value:function(username, password) {"use strict";
        let message = document.querySelector('.msg_container');
        let err_status = this.state.auth_status;
        let err_arr = []

        if (err_status==='blank_username') {
            err_arr.push('Please input a username')
            message.style.display = 'block';
        } 
        
        if (err_status==='blank_password') {
            err_arr.push('Please input a password')
            message.style.display = 'block';
        } 
      
        if(err_status==='wrong_username') {
            console.log('wrong username')
            err_arr.push('Wrong username!')
            message.style.display = 'block';
        } 
        
        if (err_status==='wrong_password') {
            console.log('wrong password')
            err_arr.push('Wrong password!')
            message.style.display = 'block';
        }

        this.setState({err_message: err_arr})

            
    }});
 
    Object.defineProperty(Box.prototype,"message_status",{writable:true,configurable:true,value:function() {"use strict";
        let err_state = this.state.err_message;
        if (err_state.length>0) {
            
            return React.createElement(Message, {state: "error", class: "message font", message: err_state})

        }
  
    }});

    Object.defineProperty(Box.prototype,"componentDidMount",{writable:true,configurable:true,value:function() {"use strict";

        let button = document.querySelector('.submit_log');
        let message = document.querySelector('.msg_container');
        let err_state = this.state.err_message;
        let user = document.querySelector('.input_user').value;
        let password = document.querySelector('.input_pass').value;

        // button.addEventListener('click',(e) => {
        //     let err_state = this.state.err_message;
        //     let user = document.querySelector('.input_user').value;
        //     let password = document.querySelector('.input_pass').value;

        // }, false)

        if (err_state.length>0) {
            this.setState({err_message: []})
            message.style.display = 'none';
        } 

        this.server_login(user,password);
        
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
                        React.createElement(Button_one, {name: "Login", button_class: "submit_log", type: "submit", value: "Login"})
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