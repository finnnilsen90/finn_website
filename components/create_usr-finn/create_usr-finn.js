var React = require('react');
var reactClass = require('create-react-class');
var ReactDom = require('react-dom');
var css = require('./create_usr-finn.css')

const Form = require('./lib/form-create_usr/form-create_usr.js')

var ____Class0=React.Component;for(var ____Class0____Key in ____Class0){if(____Class0.hasOwnProperty(____Class0____Key)){Create_usr[____Class0____Key]=____Class0[____Class0____Key];}}var ____SuperProtoOf____Class0=____Class0===null?null:____Class0.prototype;Create_usr.prototype=Object.create(____SuperProtoOf____Class0);Create_usr.prototype.constructor=Create_usr;Create_usr.__superConstructor__=____Class0;
    
    function Create_usr(props) {"use strict";
    ____Class0.call(this,props);
    this.state = {
            test: 'Test'
        };
    
    }
    
    Object.defineProperty(Create_usr.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
        
        return (
            React.createElement("div", {className: "containter"}, 
                React.createElement(Form, null)
            )
        )
    }});

;

module.exports = Create_usr;

ReactDom.render(React.createElement(Create_usr, null), document.querySelector('.create_usr-finn') || document.createElement('div'));

