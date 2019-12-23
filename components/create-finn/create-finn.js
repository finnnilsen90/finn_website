var React = require('react');
var reactClass = require('create-react-class');
var ReactDom = require('react-dom');
var css = require('./create-finn.css')

const Form = require('./lib/form-create/form-create.js')

var ____Class0=React.Component;for(var ____Class0____Key in ____Class0){if(____Class0.hasOwnProperty(____Class0____Key)){Create[____Class0____Key]=____Class0[____Class0____Key];}}var ____SuperProtoOf____Class0=____Class0===null?null:____Class0.prototype;Create.prototype=Object.create(____SuperProtoOf____Class0);Create.prototype.constructor=Create;Create.__superConstructor__=____Class0;
    
    function Create(props) {"use strict";
    ____Class0.call(this,props);
    this.state = {
            test: 'Test'
        };
    
    }
    
    Object.defineProperty(Create.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
        
        return (
            React.createElement("div", {className: "containter"}, 
                React.createElement(Form, null)
            )
        )
    }});

;

module.exports = Create;

ReactDom.render(React.createElement(Create, null), document.querySelector('.create-finn') || document.createElement('div'));

