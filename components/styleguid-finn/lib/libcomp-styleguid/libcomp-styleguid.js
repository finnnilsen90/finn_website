const React = require('react');
const reactclass = require('create-react-class');
const css = require('./libcomp-styleguid.css');

let Hamburger = require('../../../lib/hamburger/hamburger.js');

var ____Class0=React.Component;for(var ____Class0____Key in ____Class0){if(____Class0.hasOwnProperty(____Class0____Key)){Libcomp[____Class0____Key]=____Class0[____Class0____Key];}}var ____SuperProtoOf____Class0=____Class0===null?null:____Class0.prototype;Libcomp.prototype=Object.create(____SuperProtoOf____Class0);Libcomp.prototype.constructor=Libcomp;Libcomp.__superConstructor__=____Class0;
    
    function Libcomp(props) {"use strict";
    ____Class0.call(this,props);
    this.state = {
            test: ''
        };


    }


     
    Object.defineProperty(Libcomp.prototype,"componentDidMount",{writable:true,configurable:true,value:function() {"use strict";

    }});
    Object.defineProperty(Libcomp.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";

        return (
        React.createElement("div", {className: "libcomp-styleguid_Container"}, 
            React.createElement(Hamburger, {className: "hamburger_pos"})
        )
        )
    }});



module.exports = Libcomp;