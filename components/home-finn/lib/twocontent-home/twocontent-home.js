const React = require('react');
const reactclass = require('create-react-class');
const css = require('./twocontent-home.css');
let Resume_icon = require("../../../../images/resume_icon.jpg");



var ____Class4=React.Component;for(var ____Class4____Key in ____Class4){if(____Class4.hasOwnProperty(____Class4____Key)){Twocontent[____Class4____Key]=____Class4[____Class4____Key];}}var ____SuperProtoOf____Class4=____Class4===null?null:____Class4.prototype;Twocontent.prototype=Object.create(____SuperProtoOf____Class4);Twocontent.prototype.constructor=Twocontent;Twocontent.__superConstructor__=____Class4;
    
    function Twocontent(props) {"use strict";
    ____Class4.call(this,props);
    this.state = {
            test: ''
        };


       
    }
     

    Object.defineProperty(Twocontent.prototype,"componentDidMount",{writable:true,configurable:true,value:function() {"use strict";
       
    }});
    Object.defineProperty(Twocontent.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";

        return (
        React.createElement("div", {className: 'twocontent-home_Container'+' font'}, 
            React.createElement("img", {className: "resume_icon", src: Resume_icon})
        )
        )
    }});



module.exports = Twocontent;