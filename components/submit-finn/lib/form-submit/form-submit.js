const React = require('react');
const reactclass = require('create-react-class');
const css = require('./form-submit.css');
// const datepicker = require('js-datepicker');

const Button_one = require('../../../lib/button-one/button-one.js');

var ____Class7=React.Component;for(var ____Class7____Key in ____Class7){if(____Class7.hasOwnProperty(____Class7____Key)){Form[____Class7____Key]=____Class7[____Class7____Key];}}var ____SuperProtoOf____Class7=____Class7===null?null:____Class7.prototype;Form.prototype=Object.create(____SuperProtoOf____Class7);Form.prototype.constructor=Form;Form.__superConstructor__=____Class7;
    
    function Form(props) {"use strict";
    ____Class7.call(this,props);
    this.state = {
            picker: ''
        };
       
    }

    
    Object.defineProperty(Form.prototype,"componentWillMount",{writable:true,configurable:true,value:function() {"use strict";
        
    }});

    Object.defineProperty(Form.prototype,"componentDidMount",{writable:true,configurable:true,value:function() {"use strict";

    }});
    Object.defineProperty(Form.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";

        return (
        React.createElement("div", {className: 'form-submit_Container '+'font'}, 
            React.createElement("h1", {className: "header"}, "Submit Project"), 
            React.createElement("form", {className: "form", action: "/submit"}, 
                React.createElement("div", {className: "input_box"}, 
                    React.createElement("label", {className: 'label '+'p_label'}, "Project Name"), React.createElement("input", {className: "input", type: "text", name: "first_name"}), React.createElement("br", null)
                ), 
                React.createElement("div", {className: "input_box"}, 
                    React.createElement("label", {className: 'label '+'company_label'}, "Company"), React.createElement("input", {className: "input", type: "text", name: "last_name"}), React.createElement("br", null)
                ), 
                React.createElement("div", {className: "input_box"}, 
                    React.createElement("label", {className: 'label '+'proj_desc'}, "Project Description"), React.createElement("br", null), 
                    React.createElement("textarea", {className: "text_input"})
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