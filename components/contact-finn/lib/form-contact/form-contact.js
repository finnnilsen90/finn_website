const React = require('react');
const reactclass = require('create-react-class');
const css = require('./form-contact.css')

var ____Class5=React.Component;for(var ____Class5____Key in ____Class5){if(____Class5.hasOwnProperty(____Class5____Key)){Form[____Class5____Key]=____Class5[____Class5____Key];}}var ____SuperProtoOf____Class5=____Class5===null?null:____Class5.prototype;Form.prototype=Object.create(____SuperProtoOf____Class5);Form.prototype.constructor=Form;Form.__superConstructor__=____Class5;
    
    function Form(props) {"use strict";
    ____Class5.call(this,props);
    this.state = {
            test: ''
        };


       
    }
     

    Object.defineProperty(Form.prototype,"componentDidMount",{writable:true,configurable:true,value:function() {"use strict";
       
    }});
    Object.defineProperty(Form.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";

        return (
        React.createElement("div", {className: 'form-contact_Container'+' font'}, 
            React.createElement("h1", {className: "header"}, "Template"), 
            React.createElement("div", {className: "test_content"}, 
                "Test"
            )
        )
        )
    }});



module.exports = Form;