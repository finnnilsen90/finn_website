var React = require('react');
var reactClass = require('create-react-class');
var ReactDom = require('react-dom');
var css = require('./login-finn.css')

const Box = require('./lib/box-login/box-login.js')

var ____Class0=React.Component;for(var ____Class0____Key in ____Class0){if(____Class0.hasOwnProperty(____Class0____Key)){Login[____Class0____Key]=____Class0[____Class0____Key];}}var ____SuperProtoOf____Class0=____Class0===null?null:____Class0.prototype;Login.prototype=Object.create(____SuperProtoOf____Class0);Login.prototype.constructor=Login;Login.__superConstructor__=____Class0;
    
    function Login(props) {"use strict";
    ____Class0.call(this,props);
    this.state = {
            test: 'Test'
        };
    
    }
    
    Object.defineProperty(Login.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
        
        return (
            React.createElement("div", {className: "containter"}, 
                React.createElement(Box, null)
            )
        )
    }});

;

module.exports = Login;

ReactDom.render(React.createElement(Login, null), document.querySelector('.login-finn') || document.createElement('div'));

