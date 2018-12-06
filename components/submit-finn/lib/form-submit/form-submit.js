const React = require('react');
const reactclass = require('create-react-class');
const css = require('./form-submit.css')

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
                )
            )
        )
        )
    }});



module.exports = Form;