const React = require('react');
const reactclass = require('create-react-class');
const css = require('./form-contact.css')

const Button_one = require('../../../lib/button-one/button-one.js');
const Message = require('../../../lib/message/message.js');

var ____Classo=React.Component;for(var ____Classo____Key in ____Classo){if(____Classo.hasOwnProperty(____Classo____Key)){Form[____Classo____Key]=____Classo[____Classo____Key];}}var ____SuperProtoOf____Classo=____Classo===null?null:____Classo.prototype;Form.prototype=Object.create(____SuperProtoOf____Classo);Form.prototype.constructor=Form;Form.__superConstructor__=____Classo;
    
    function Form(props) {"use strict";
    ____Classo.call(this,props);
    this.state = {
            msg_sent: false,
            msg_state: '',
            msg: []
        };
       this.message = this.message.bind(this);
    }

    Object.defineProperty(Form.prototype,"message",{writable:true,configurable:true,value:function(result) {"use strict";
        let msg = document.querySelector('.msg_comp');
        let msg_state = result ? 'Success!':'Error Sending'

        
        this.setState(function()  {return {
            msg_sent: true,
        };});
        this.setState(function()  {return {
            msg_state: result ? 'good' : 'error'
        };});
        this.setState(function()  {return {
            msg: [msg_state]
        };});

        msg.style.display = 'block';
    }});
     

    Object.defineProperty(Form.prototype,"componentDidMount",{writable:true,configurable:true,value:function() {"use strict";
        let url = window.location.href;
        let searchParams1 = (new URL(document.location)).searchParams.get('valid');
        console.log('query string present => ',searchParams1);
        if (searchParams1) {
            console.log('response => ',searchParams1);
            this.message(searchParams1);
        };
            
    }});
    Object.defineProperty(Form.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";

        return (
        React.createElement("div", {className: 'form-contact_Container'+' font'}, 
            React.createElement("h1", {className: "header"}, "Contact"), 
            React.createElement("div", {className: "msg_comp"}, 
                React.createElement(Message, {state: this.state.msg_state, class: "msg", message: this.state.msg})
            ), 
            React.createElement("form", {className: "form", method: "post", action: "/email"}, 
                React.createElement("div", {className: "input_box"}, 
                    React.createElement("label", {className: 'label '+'e_label'}, "Email"), React.createElement("input", {className: "input", type: "text", name: "email"}), React.createElement("br", null)
                ), 
                React.createElement("div", {className: "input_box"}, 
                    React.createElement("label", {className: 'label '+'s_label'}, "Subject"), React.createElement("input", {className: "input", type: "text", name: "subject"}), React.createElement("br", null)
                ), 
                React.createElement("div", {className: "input_box"}, 
                    React.createElement("label", {className: 'label '+'message'}, "Message"), React.createElement("br", null), 
                    React.createElement("textarea", {className: "text_input", type: "text", name: "message"})
                ), 
                React.createElement("div", {className: "button"}, 
                    React.createElement(Button_one, {name: "Submit", button_class: "submit_msg", type: "submit", value: "Submit"})
                )
            )
        )
        )
    }});



module.exports = Form;