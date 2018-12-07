const React = require('react');
const reactclass = require('create-react-class');
const css = require('./form-submit.css');
const datepicker = require('js-datepicker');

var ____ClassA=React.Component;for(var ____ClassA____Key in ____ClassA){if(____ClassA.hasOwnProperty(____ClassA____Key)){Form[____ClassA____Key]=____ClassA[____ClassA____Key];}}var ____SuperProtoOf____ClassA=____ClassA===null?null:____ClassA.prototype;Form.prototype=Object.create(____SuperProtoOf____ClassA);Form.prototype.constructor=Form;Form.__superConstructor__=____ClassA;
    
    function Form(props) {"use strict";
    ____ClassA.call(this,props);
    this.state = {
            picker: ''
        };
       
    }
    Object.defineProperty(Form.prototype,"componentWillMount",{writable:true,configurable:true,value:function() {"use strict";
        
    }});

    Object.defineProperty(Form.prototype,"componentDidMount",{writable:true,configurable:true,value:function() {"use strict";
        const picker = datepicker('.date_select');
    }});
    Object.defineProperty(Form.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";

        return (
        React.createElement("div", {className: 'form-submit_Container '+'font'}, 
            React.createElement("form", {className: "form", action: "/submit"}, 
                React.createElement("div", {className: "input_box"}, 
                    React.createElement("label", {className: 'label '+'f_label'}, "First Name"), React.createElement("input", {className: "input", type: "text", name: "first_name"}), React.createElement("br", null)
                ), 
                React.createElement("div", {className: "input_box"}, 
                    React.createElement("label", {className: 'label '+'l_label'}, "Last Name"), React.createElement("input", {className: "input", type: "text", name: "last_name"}), React.createElement("br", null)
                ), 
                React.createElement("div", {className: "input_box"}, 
                    React.createElement("label", {className: 'label '+'company_label'}, "Company"), React.createElement("input", {className: "input", type: "text", name: "company"}), React.createElement("br", null)
                ), 
                React.createElement("div", {className: "input_box"}, 
                    React.createElement("label", {className: 'label '+'proj_desc'}, "Project Description"), React.createElement("br", null), 
                    React.createElement("textarea", {className: "text_input"})
                ), 
                React.createElement("div", {className: "input_box"}, 
                    React.createElement("label", {className: 'label'}, "Select Date"), React.createElement("input", {className: 'input '+'date_select', type: "text", name: "date"})
                )
            )
        )
        )
    }});



module.exports = Form;