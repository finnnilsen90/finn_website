var React = require('react');
var reactClass = require('create-react-class');
var ReactDom = require('react-dom');
var css = require('./karma-finn.css')

const Libcomp = require('./lib/Libcomp/Libcomp.js')

var ____Class0=React.Component;for(var ____Class0____Key in ____Class0){if(____Class0.hasOwnProperty(____Class0____Key)){Karma[____Class0____Key]=____Class0[____Class0____Key];}}var ____SuperProtoOf____Class0=____Class0===null?null:____Class0.prototype;Karma.prototype=Object.create(____SuperProtoOf____Class0);Karma.prototype.constructor=Karma;Karma.__superConstructor__=____Class0;
    
    function Karma(props) {"use strict";
    ____Class0.call(this,props);
    this.state = {
            test: 'Test'
        };
    
    }
    
    Object.defineProperty(Karma.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
        
        return (
            React.createElement("div", {className: "containter"}, 
                React.createElement(Libcomp, null)
            )
        )
    }});

;

module.exports = Karma;

ReactDom.render(React.createElement(Karma, null), document.querySelector('.karma-finn') || document.createElement('div'));

