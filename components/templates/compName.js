var React = require('react');
var reactClass = require('create-react-class');
var ReactDom = require('react-dom');
var css = require('./compName.css')

const ChildConst = require('./lib/child/child.js')

var ____Class0=React.Component;for(var ____Class0____Key in ____Class0){if(____Class0.hasOwnProperty(____Class0____Key)){VarName[____Class0____Key]=____Class0[____Class0____Key];}}var ____SuperProtoOf____Class0=____Class0===null?null:____Class0.prototype;VarName.prototype=Object.create(____SuperProtoOf____Class0);VarName.prototype.constructor=VarName;VarName.__superConstructor__=____Class0;
    
    function VarName(props) {"use strict";
    ____Class0.call(this,props);
    this.state = {
            test: 'Test'
        };
    
    }
    
    Object.defineProperty(VarName.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
        
        return (
            React.createElement("div", {className: "containter"}, 
                React.createElement(ChildConst, null)
            )
        )
    }});

;

module.exports = VarName;

ReactDom.render(React.createElement(VarName, null), document.querySelector('.compName') || document.createElement('div'));

