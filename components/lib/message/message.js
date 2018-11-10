const React = require('react');
const reactclass = require('create-react-class');
const css = require('./message.css')

var ____Class0=React.Component;for(var ____Class0____Key in ____Class0){if(____Class0.hasOwnProperty(____Class0____Key)){Message[____Class0____Key]=____Class0[____Class0____Key];}}var ____SuperProtoOf____Class0=____Class0===null?null:____Class0.prototype;Message.prototype=Object.create(____SuperProtoOf____Class0);Message.prototype.constructor=Message;Message.__superConstructor__=____Class0;
    
    function Message(props) {"use strict";
    ____Class0.call(this,props);
    this.state = {

        };

       
    }

    Object.defineProperty(Message.prototype,"componentDidMount",{writable:true,configurable:true,value:function() {"use strict";

    }});

    Object.defineProperty(Message.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";

        return (
        React.createElement("div", {className: 'message_Container '+this.props.class}, 
            React.createElement("div", {className: 'msg_box '+this.props.state}, 
                React.createElement("p", {className: "p_text"}, this.props.message)
            )
        )
        )
    }});



module.exports = Message;