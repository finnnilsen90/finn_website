const React = require('react');
const reactclass = require('create-react-class');
const css = require('./form-create.css')

const Button_one = require('../../../lib/button-one/button-one.js');

var ____Class1=React.Component;for(var ____Class1____Key in ____Class1){if(____Class1.hasOwnProperty(____Class1____Key)){Form[____Class1____Key]=____Class1[____Class1____Key];}}var ____SuperProtoOf____Class1=____Class1===null?null:____Class1.prototype;Form.prototype=Object.create(____SuperProtoOf____Class1);Form.prototype.constructor=Form;Form.__superConstructor__=____Class1;
    
    function Form(props) {"use strict";
    ____Class1.call(this,props);
    this.state = {
            test: ''
        };
       
    }
     

    Object.defineProperty(Form.prototype,"componentDidMount",{writable:true,configurable:true,value:function() {"use strict";

    }});

    Object.defineProperty(Form.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";

        return (
        React.createElement("div", {className: 'form-create_Container '+'font'}, 
            React.createElement("form", {className: "form", action: "/create_login", method: "post"}, 
            React.createElement("div", {className: "input_box"}, 
                    React.createElement("label", {className: 'label '+'f_label'}, "First Name"), React.createElement("input", {className: "input", type: "text", name: "first_name"}), React.createElement("br", null)
                ), 
                React.createElement("div", {className: "input_box"}, 
                    React.createElement("label", {className: 'label '+'l_label'}, "Last Name"), React.createElement("input", {className: "input", type: "text", name: "last_name"}), React.createElement("br", null)
                ), 
                React.createElement("div", {className: "input_box"}, 
                    React.createElement("label", {className: 'label '+'e_label'}, "Email"), React.createElement("input", {className: "input", type: "text", name: "email"}), React.createElement("br", null)
                ), 
                React.createElement("div", {className: "input_box"}, 
                    React.createElement("label", {className: 'label '+'p_label'}, "Password"), React.createElement("input", {className: "input", type: "password", name: "password"})
                ), 
                React.createElement("div", {className: "input_box"}, 
                    React.createElement("label", {className: 'label '+'t_label'}, "Admin"), React.createElement("input", {className: "check", type: "checkbox", name: "admin", value: "admin"})
                ), 

                React.createElement("div", {className: "button"}, 
                    React.createElement(Button_one, {name: "Submit", button_class: "submit_log", type: "submit", value: "Submit"})
                )

            )
        )
        )
    }});



module.exports = Form;