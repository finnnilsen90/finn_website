const React = require('react');
const reactclass = require('create-react-class');
const css = require('./outline-resume.css')

var ____Class4=React.Component;for(var ____Class4____Key in ____Class4){if(____Class4.hasOwnProperty(____Class4____Key)){Outline[____Class4____Key]=____Class4[____Class4____Key];}}var ____SuperProtoOf____Class4=____Class4===null?null:____Class4.prototype;Outline.prototype=Object.create(____SuperProtoOf____Class4);Outline.prototype.constructor=Outline;Outline.__superConstructor__=____Class4;
    
    function Outline(props) {"use strict";
    ____Class4.call(this,props);
    this.state = {
            test: ''
        };

       
       
    }
    

    Object.defineProperty(Outline.prototype,"componentDidMount",{writable:true,configurable:true,value:function() {"use strict";
        
    }});
    Object.defineProperty(Outline.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";

        return (
        React.createElement("div", {className: 'outline-resume_Container '+'font'}, 

            React.createElement("h1", {className: "header"}, "Resume")
           
        )
        )
    }});



module.exports = Outline;