const React = require('react');
const reactclass = require('create-react-class');
const css = require('./Libcomp.css')

var ____Class5=React.Component;for(var ____Class5____Key in ____Class5){if(____Class5.hasOwnProperty(____Class5____Key)){ChildConst[____Class5____Key]=____Class5[____Class5____Key];}}var ____SuperProtoOf____Class5=____Class5===null?null:____Class5.prototype;ChildConst.prototype=Object.create(____SuperProtoOf____Class5);ChildConst.prototype.constructor=ChildConst;ChildConst.__superConstructor__=____Class5;
    
    function ChildConst(props) {"use strict";
    ____Class5.call(this,props);
    this.state = {
            test: ''
        };


       
    }
     

    Object.defineProperty(ChildConst.prototype,"componentDidMount",{writable:true,configurable:true,value:function() {"use strict";
       
    }});
    Object.defineProperty(ChildConst.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";

        return (
        React.createElement("div", {className: 'Libcomp_Container'+' font'}, 
            React.createElement("h1", {className: "header"}, "Template"), 
            React.createElement("div", {className: "test_content"}, 
                "Test"
            )
        )
        )
    }});



module.exports = ChildConst;