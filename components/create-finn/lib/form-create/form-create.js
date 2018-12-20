const React = require('react');
const reactclass = require('create-react-class');
const css = require('./form-create.css')

const Button_one = require('../../../lib/button-one/button-one.js');

var ____Class3=React.Component;for(var ____Class3____Key in ____Class3){if(____Class3.hasOwnProperty(____Class3____Key)){Form[____Class3____Key]=____Class3[____Class3____Key];}}var ____SuperProtoOf____Class3=____Class3===null?null:____Class3.prototype;Form.prototype=Object.create(____SuperProtoOf____Class3);Form.prototype.constructor=Form;Form.__superConstructor__=____Class3;
    
    function Form(props) {"use strict";
    ____Class3.call(this,props);
    this.state = {
            test: ''
        };
       
    }
     

    Object.defineProperty(Form.prototype,"componentDidMount",{writable:true,configurable:true,value:function() {"use strict";

    }});

    Object.defineProperty(Form.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";

        return (
        React.createElement("div", {className: 'form-create_Container '+'font'}, 
            React.createElement("form", {className: "form", action: "/create"}, 


                React.createElement("div", {className: "button"}, 
                    React.createElement(Button_one, {name: "Submit", button_class: "submit_log", type: "submit", value: "Submit"})
                )

            )
        )
        )
    }});



module.exports = Form;