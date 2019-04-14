const React = require('react');
const reactclass = require('create-react-class');
const css = require('./outline-resume.css')

var ____Class7=React.Component;for(var ____Class7____Key in ____Class7){if(____Class7.hasOwnProperty(____Class7____Key)){Outline[____Class7____Key]=____Class7[____Class7____Key];}}var ____SuperProtoOf____Class7=____Class7===null?null:____Class7.prototype;Outline.prototype=Object.create(____SuperProtoOf____Class7);Outline.prototype.constructor=Outline;Outline.__superConstructor__=____Class7;
    
    function Outline(props) {"use strict";
    ____Class7.call(this,props);
    this.state = {
            test: ''
        };
       
    }


    Object.defineProperty(Outline.prototype,"componentDidMount",{writable:true,configurable:true,value:function() {"use strict";

    }});
    Object.defineProperty(Outline.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";

        return (
        React.createElement("div", {className: 'outline-resume_Container '+'font'}, 
            React.createElement("h1", {className: "header"}, "Resume"), 
            React.createElement("h3", null, "Mogo Interactive")
        )
        )
    }});



module.exports = Outline;