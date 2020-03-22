const React = require('react');
const reactclass = require('create-react-class');
const css = require('./threecontent-home.css')

var ____Class2=React.Component;for(var ____Class2____Key in ____Class2){if(____Class2.hasOwnProperty(____Class2____Key)){Threecontent[____Class2____Key]=____Class2[____Class2____Key];}}var ____SuperProtoOf____Class2=____Class2===null?null:____Class2.prototype;Threecontent.prototype=Object.create(____SuperProtoOf____Class2);Threecontent.prototype.constructor=Threecontent;Threecontent.__superConstructor__=____Class2;
    
    function Threecontent(props) {"use strict";
    ____Class2.call(this,props);
    this.state = {
            test: ''
        };


       
    }
     

    Object.defineProperty(Threecontent.prototype,"componentDidMount",{writable:true,configurable:true,value:function() {"use strict";
       
    }});
    Object.defineProperty(Threecontent.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";

        return (
        React.createElement("div", {className: 'threecontent-home_Container'+' font'}, 
            React.createElement("h1", {className: "resume_header"}, "Projects")
      
        )
        )
    }});



module.exports = Threecontent;