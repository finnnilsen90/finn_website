const React = require('react');
const reactclass = require('create-react-class');
const css = require('./form-submit.css');
// const datepicker = require('js-datepicker');

const Button_one = require('../../../lib/button-one/button-one.js');
const Message = require('../../../lib/message/message.js');

var ____Classh=React.Component;for(var ____Classh____Key in ____Classh){if(____Classh.hasOwnProperty(____Classh____Key)){Form[____Classh____Key]=____Classh[____Classh____Key];}}var ____SuperProtoOf____Classh=____Classh===null?null:____Classh.prototype;Form.prototype=Object.create(____SuperProtoOf____Classh);Form.prototype.constructor=Form;Form.__superConstructor__=____Classh;
    
    function Form(props) {"use strict";
    ____Classh.call(this,props);
    this.state = {
            msg: [],
            msg_status: (new URL(document.location)).searchParams.get('valid')
        };
        
        this.form_submit = this.form_submit.bind(this);
        this.message = this.message.bind(this);
    }

    Object.defineProperty(Form.prototype,"form_submit",{writable:true,configurable:true,value:function() {"use strict";
        let container = document.querySelector('.msg_container');
        let url_string = this.state.msg_status;
        let msg_arr = [];

        if (url_string==='success') {
            msg_arr.push('Your order form has been successfully submitted!');
            container.style.display = 'block';
        } 
        if (url_string==='error') {
            msg_arr.push('There was an error with your submission.');
            container.style.display = 'block';
        }

        this.setState({
            msg: msg_arr
        })

    }});

    Object.defineProperty(Form.prototype,"message",{writable:true,configurable:true,value:function() {"use strict";
        let msg_state = this.state.msg;
        let err_state = this.state.msg_status==='success'?'good':'error';

        if (msg_state.length>0) {
            return React.createElement(Message, {class: "msg_comp", state: err_state, message: msg_state})
        }
    }});
    
    Object.defineProperty(Form.prototype,"componentWillMount",{writable:true,configurable:true,value:function() {"use strict";
    
    }});

    Object.defineProperty(Form.prototype,"componentDidMount",{writable:true,configurable:true,value:function() {"use strict";
        this.form_submit()
    }});
    Object.defineProperty(Form.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";

        return (
        React.createElement("div", {className: 'form-submit_Container '+'font'}, 
            React.createElement("div", {className: "msg_container"}, 
                this.message()
            ), 
            React.createElement("h1", {className: "header"}, "Submit Project"), 
            React.createElement("form", {className: "form", action: "/form", method: "post"}, 
                React.createElement("div", {className: "input_box"}, 
                    React.createElement("label", {className: 'label '+'p_label'}, "Project Name"), React.createElement("input", {className: "input", type: "text", name: "project_name"}), React.createElement("br", null)
                ), 
                React.createElement("div", {className: "input_box"}, 
                    React.createElement("label", {className: 'label '+'company_label'}, "Company"), React.createElement("input", {className: "input", type: "text", name: "company"}), React.createElement("br", null)
                ), 
                React.createElement("div", {className: "input_box"}, 
                    React.createElement("label", {className: 'label '+'proj_desc'}, "Project Description"), React.createElement("br", null), 
                    React.createElement("textarea", {className: "text_input", type: "text", name: "project_description"})
                ), 
                React.createElement("div", {className: "input_box"}, 
                    React.createElement("label", {className: 'label '+'d_label'}, "Completion Date"), React.createElement("input", {className: 'input '+'date_select', type: "date", name: "date"})
                ), 
                React.createElement("div", {className: "input_box"}, 
                    React.createElement("label", {className: 'label '+'budget_label'}, "Budget"), React.createElement("input", {className: "input", type: "text", name: "budget"}), React.createElement("br", null)
                ), 

                React.createElement("div", {className: "button"}, 
                    React.createElement(Button_one, {name: "Submit", button_class: "submit_log", type: "submit", value: "Submit"})
                )
            )
        )
        )
    }});



module.exports = Form;