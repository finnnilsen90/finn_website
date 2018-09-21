var React = require('react');
var reactClass = require('create-react-class');
var ReactDom = require('react-dom');
var css = require('./styleguid-finn.css')

const Color = require('./lib/color-styleguid/color-styleguid.js')

var ____Class1=React.Component;for(var ____Class1____Key in ____Class1){if(____Class1.hasOwnProperty(____Class1____Key)){Styleguid[____Class1____Key]=____Class1[____Class1____Key];}}var ____SuperProtoOf____Class1=____Class1===null?null:____Class1.prototype;Styleguid.prototype=Object.create(____SuperProtoOf____Class1);Styleguid.prototype.constructor=Styleguid;Styleguid.__superConstructor__=____Class1;
    
    function Styleguid(props) {"use strict";
    ____Class1.call(this,props);
    this.state = {
            test: 'Test'
        };
    
    }
    
    Object.defineProperty(Styleguid.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
        
        return (
            React.createElement("div", {className: "containter"}, 
                React.createElement(Color, null)
            )
        )
    }});

;

module.exports = Styleguid;

ReactDom.render(React.createElement(Styleguid, null), document.querySelector('.styleguid-finn') || document.createElement('div'));

