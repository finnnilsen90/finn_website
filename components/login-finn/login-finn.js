var React = require('react');
var reactClass = require('create-react-class');
var ReactDom = require('react-dom');
var css = require('./login-finn.css')
let Background = require("../../images/santa_cruz2015.jpg");

const Box = require('./lib/box-login/box-login.js')

var ____ClassR=React.Component;for(var ____ClassR____Key in ____ClassR){if(____ClassR.hasOwnProperty(____ClassR____Key)){Login[____ClassR____Key]=____ClassR[____ClassR____Key];}}var ____SuperProtoOf____ClassR=____ClassR===null?null:____ClassR.prototype;Login.prototype=Object.create(____SuperProtoOf____ClassR);Login.prototype.constructor=Login;Login.__superConstructor__=____ClassR;
    
    function Login(props) {"use strict";
    ____ClassR.call(this,props);
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

