var React = require('react');
var reactClass = require('create-react-class');
var ReactDom = require('react-dom');
var css = require('./submit-finn.css')

const Form = require('./lib/form-submit/form-submit.js')

var ____Class0=React.Component;for(var ____Class0____Key in ____Class0){if(____Class0.hasOwnProperty(____Class0____Key)){Submit[____Class0____Key]=____Class0[____Class0____Key];}}var ____SuperProtoOf____Class0=____Class0===null?null:____Class0.prototype;Submit.prototype=Object.create(____SuperProtoOf____Class0);Submit.prototype.constructor=Submit;Submit.__superConstructor__=____Class0;
    
    function Submit(props) {"use strict";
    ____Class0.call(this,props);
    this.state = {
            test: 'Test'
        };
    
    }
    
    Object.defineProperty(Submit.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
        
        return (
            React.createElement("div", {className: "containter"}, 
                React.createElement(Form, null)
            )
        )
    }});

;

module.exports = Submit;

ReactDom.render(React.createElement(Submit, null), document.querySelector('.submit-finn') || document.createElement('div'));

