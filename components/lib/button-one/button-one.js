const React = require('react');
const reactclass = require('create-react-class');
const css = require('./button-one.css')

var ____Class2=React.Component;for(var ____Class2____Key in ____Class2){if(____Class2.hasOwnProperty(____Class2____Key)){Button[____Class2____Key]=____Class2[____Class2____Key];}}var ____SuperProtoOf____Class2=____Class2===null?null:____Class2.prototype;Button.prototype=Object.create(____SuperProtoOf____Class2);Button.prototype.constructor=Button;Button.__superConstructor__=____Class2;
    
    function Button(props) {"use strict";
    ____Class2.call(this,props);
    this.state = {
 
        };

       
    }
    

    Object.defineProperty(Button.prototype,"componentDidMount",{writable:true,configurable:true,value:function() {"use strict";

    }});
    Object.defineProperty(Button.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";

        return (
        React.createElement("div", {className: "button-one_Container"}, 
            React.createElement("button", {className: "button_style_one", href: this.props.href}, this.props.name)
        )
        )
    }});



module.exports = Button;