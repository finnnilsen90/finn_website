const React = require('react');
const reactclass = require('create-react-class');
const css = require('./libcomp-styleguid.css');

let Hamburger = require('../../../lib/hamburger/hamburger.js');

var ____Class1=React.Component;for(var ____Class1____Key in ____Class1){if(____Class1.hasOwnProperty(____Class1____Key)){Libcomp[____Class1____Key]=____Class1[____Class1____Key];}}var ____SuperProtoOf____Class1=____Class1===null?null:____Class1.prototype;Libcomp.prototype=Object.create(____SuperProtoOf____Class1);Libcomp.prototype.constructor=Libcomp;Libcomp.__superConstructor__=____Class1;
    
    function Libcomp(props) {"use strict";
    ____Class1.call(this,props);
    this.state = {
            test: ''
        };


    }


     
    Object.defineProperty(Libcomp.prototype,"componentDidMount",{writable:true,configurable:true,value:function() {"use strict";

    }});
    Object.defineProperty(Libcomp.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";

        return (
        React.createElement("div", {className: "libcomp-styleguid_Container"}, 
            React.createElement("h2", {className: "header_comp"}, "Library components"), 
            React.createElement("div", {className: "hamburger_pos"}, 
                React.createElement(Hamburger, null)
            )
        )
        )
    }});



module.exports = Libcomp;