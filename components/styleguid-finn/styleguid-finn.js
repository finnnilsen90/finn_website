var React = require('react');
var reactClass = require('create-react-class');
var ReactDom = require('react-dom');
var css = require('./styleguid-finn.css')

const Color = require('./lib/color-styleguid/color-styleguid.js');
const Libcomp = require('./lib/libcomp-styleguid/libcomp-styleguid.js');
const Footer = require('../lib/footer/footer.js');

var ____Classe=React.Component;for(var ____Classe____Key in ____Classe){if(____Classe.hasOwnProperty(____Classe____Key)){Styleguid[____Classe____Key]=____Classe[____Classe____Key];}}var ____SuperProtoOf____Classe=____Classe===null?null:____Classe.prototype;Styleguid.prototype=Object.create(____SuperProtoOf____Classe);Styleguid.prototype.constructor=Styleguid;Styleguid.__superConstructor__=____Classe;
    
    function Styleguid(props) {"use strict";
    ____Classe.call(this,props);
    this.state = {
            test: 'Test'
        };
    
    }
    
    Object.defineProperty(Styleguid.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
        
        return (
            React.createElement("div", {className: 'containter '+'font'}, 
                React.createElement(Color, null), 
                React.createElement(Libcomp, null), 
                React.createElement("div", {className: "footer"}, 
                    React.createElement(Footer, null)
                )
            )
        )
    }});

;

module.exports = Styleguid;

ReactDom.render(React.createElement(Styleguid, null), document.querySelector('.styleguid-finn') || document.createElement('div'));

