const React = require('react');
const reactclass = require('create-react-class');
const css = require('./form-contact.css')

const Button_one = require('../../../lib/button-one/button-one.js');

var ____Class8=React.Component;for(var ____Class8____Key in ____Class8){if(____Class8.hasOwnProperty(____Class8____Key)){Form[____Class8____Key]=____Class8[____Class8____Key];}}var ____SuperProtoOf____Class8=____Class8===null?null:____Class8.prototype;Form.prototype=Object.create(____SuperProtoOf____Class8);Form.prototype.constructor=Form;Form.__superConstructor__=____Class8;
    
    function Form(props) {"use strict";
    ____Class8.call(this,props);
    this.state = {
            test: ''
        };


       
    }
     

    Object.defineProperty(Form.prototype,"componentDidMount",{writable:true,configurable:true,value:function() {"use strict";
       
    }});
    Object.defineProperty(Form.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";

        return (
        React.createElement("div", {className: 'form-contact_Container'+' font'}, 
            React.createElement("h1", {className: "header"}, "Contact"), 
            React.createElement("form", {className: "form", action: "mailto:fnilsen1051@gmail.com", method: "post"}, 
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