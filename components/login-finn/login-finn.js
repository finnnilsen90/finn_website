var React = require('react');
var reactClass = require('create-react-class');
var ReactDom = require('react-dom');
var css = require('./login-finn.css')
let Background = require("../../images/santa_cruz2015.jpg");

const Box = require('./lib/box-login/box-login.js')

var ____Classn=React.Component;for(var ____Classn____Key in ____Classn){if(____Classn.hasOwnProperty(____Classn____Key)){Login[____Classn____Key]=____Classn[____Classn____Key];}}var ____SuperProtoOf____Classn=____Classn===null?null:____Classn.prototype;Login.prototype=Object.create(____SuperProtoOf____Classn);Login.prototype.constructor=Login;Login.__superConstructor__=____Classn;
    
    function Login(props) {"use strict";
    ____Classn.call(this,props);
    this.state = {
            test: 'Test'
        };
    
    }
    
    Object.defineProperty(Login.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
        
        return (
            React.createElement("div", {className: "container"}, 
                React.createElement("img", {className: "background_img", src: Background}), 
                    React.createElement("div", {className: "box_cont"}, 
                        React.createElement(Box, null)
                    )

            )
        )
    }});

;

module.exports = Login;

ReactDom.render(React.createElement(Login, null), document.querySelector('.login-finn') || document.createElement('div'));

