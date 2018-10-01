var React = require('react');
var reactClass = require('create-react-class');
var ReactDom = require('react-dom');
var css = require('./styleguid-finn.css')

const Color = require('./lib/color-styleguid/color-styleguid.js')
const Libcomp = require('./lib/libcomp-styleguid/libcomp-styleguid.js')

var ____Class4=React.Component;for(var ____Class4____Key in ____Class4){if(____Class4.hasOwnProperty(____Class4____Key)){Styleguid[____Class4____Key]=____Class4[____Class4____Key];}}var ____SuperProtoOf____Class4=____Class4===null?null:____Class4.prototype;Styleguid.prototype=Object.create(____SuperProtoOf____Class4);Styleguid.prototype.constructor=Styleguid;Styleguid.__superConstructor__=____Class4;
    
    function Styleguid(props) {"use strict";
    ____Class4.call(this,props);
    this.state = {
            test: 'Test'
        };
    
    }
    
    Object.defineProperty(Styleguid.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
        
        return (
            React.createElement("div", {className: 'containter '+'font'}, 
                React.createElement(Color, null), 
                React.createElement(Libcomp, null)
            )
        )
    }});

;

module.exports = Styleguid;

ReactDom.render(React.createElement(Styleguid, null), document.querySelector('.styleguid-finn') || document.createElement('div'));

