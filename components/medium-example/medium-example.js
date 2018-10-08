var React = require('react');
var reactClass = require('create-react-class');
var ReactDom = require('react-dom');
var css = require('./medium-example.css')

const Mediumchild = require('./lib/test-medium/test-medium.js')

var ____Classl=React.Component;for(var ____Classl____Key in ____Classl){if(____Classl.hasOwnProperty(____Classl____Key)){Medium[____Classl____Key]=____Classl[____Classl____Key];}}var ____SuperProtoOf____Classl=____Classl===null?null:____Classl.prototype;Medium.prototype=Object.create(____SuperProtoOf____Classl);Medium.prototype.constructor=Medium;Medium.__superConstructor__=____Classl;
    
    function Medium(props) {"use strict";
    ____Classl.call(this,props);
    this.state = {
            test: 'Test'
        };
    
    }
    
    Object.defineProperty(Medium.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
        
        return (
            React.createElement("div", {className: "containter"}, 
                React.createElement(Mediumchild, null)
            )
        )
    }});

;

module.exports = Medium;

ReactDom.render(React.createElement(Medium, null), document.querySelector('.medium-example') || document.createElement('div'));

