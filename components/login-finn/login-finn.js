var React = require('react');
var reactClass = require('create-react-class');
var ReactDom = require('react-dom');
var css = require('./login-finn.css')
let Background = require("../../images/santa_cruz2015.jpg");

const Box = require('./lib/box-login/box-login.js')

var ____ClassO=React.Component;for(var ____ClassO____Key in ____ClassO){if(____ClassO.hasOwnProperty(____ClassO____Key)){Login[____ClassO____Key]=____ClassO[____ClassO____Key];}}var ____SuperProtoOf____ClassO=____ClassO===null?null:____ClassO.prototype;Login.prototype=Object.create(____SuperProtoOf____ClassO);Login.prototype.constructor=Login;Login.__superConstructor__=____ClassO;
    
    function Login(props) {"use strict";
    ____ClassO.call(this,props);
    this.state = {
            test: 'Test'
        };
    
    }
    
    Object.defineProperty(Login.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
        
        return (
            React.createElement("div", {className: "containter"}, 
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

