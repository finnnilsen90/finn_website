const React = require('react');
const reactclass = require('create-react-class');
const css = require('./button-two.css')

var ____Class0=React.Component;for(var ____Class0____Key in ____Class0){if(____Class0.hasOwnProperty(____Class0____Key)){Button[____Class0____Key]=____Class0[____Class0____Key];}}var ____SuperProtoOf____Class0=____Class0===null?null:____Class0.prototype;Button.prototype=Object.create(____SuperProtoOf____Class0);Button.prototype.constructor=Button;Button.__superConstructor__=____Class0;
    
    function Button(props) {"use strict";
    ____Class0.call(this,props);
    this.state = {

        };
       
    }


    Object.defineProperty(Button.prototype,"componentDidMount",{writable:true,configurable:true,value:function() {"use strict";

    }});
    Object.defineProperty(Button.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";

        return (
        React.createElement("div", {className: "button-two_Container"}, 
            React.createElement("button", {className: "button_style_two", href: this.props.href, type: this.props.type, value: this.props.value}, this.props.name)
        )
        )
    }});



module.exports = Button;