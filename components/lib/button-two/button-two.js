const React = require('react');
const reactclass = require('create-react-class');
const css = require('./button-two.css')

var ____Class1=React.Component;for(var ____Class1____Key in ____Class1){if(____Class1.hasOwnProperty(____Class1____Key)){Button[____Class1____Key]=____Class1[____Class1____Key];}}var ____SuperProtoOf____Class1=____Class1===null?null:____Class1.prototype;Button.prototype=Object.create(____SuperProtoOf____Class1);Button.prototype.constructor=Button;Button.__superConstructor__=____Class1;
    
    function Button(props) {"use strict";
    ____Class1.call(this,props);
    this.state = {

        };
       
    }


    Object.defineProperty(Button.prototype,"componentDidMount",{writable:true,configurable:true,value:function() {"use strict";

    }});
    Object.defineProperty(Button.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";

        return (
        React.createElement("div", {className: "button-two_Container"}, 
            React.createElement("button", {className: "button_style_two", href: this.props.href}, this.props.name)
        )
        )
    }});



module.exports = Button;