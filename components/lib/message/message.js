const React = require('react');
const reactclass = require('create-react-class');
const css = require('./message.css')

var ____Class3=React.Component;for(var ____Class3____Key in ____Class3){if(____Class3.hasOwnProperty(____Class3____Key)){Message[____Class3____Key]=____Class3[____Class3____Key];}}var ____SuperProtoOf____Class3=____Class3===null?null:____Class3.prototype;Message.prototype=Object.create(____SuperProtoOf____Class3);Message.prototype.constructor=Message;Message.__superConstructor__=____Class3;
    
    function Message(props) {"use strict";
    ____Class3.call(this,props);
    this.state = {

        };
        this.format = this.format.bind(this);
    }

    Object.defineProperty(Message.prototype,"format",{writable:true,configurable:true,value:function(arr) {"use strict";
        let new_arr = []
        Array.prototype.isArray = true;
      
        if (arr.isArray) {
            for (let i=0;i<arr.length;i++) {
                new_arr.push(React.createElement("p", null, arr[i]))
            }
            return new_arr;
        } else {
            console.error('Message component input needs to be an array!')
        }
    }});

    Object.defineProperty(Message.prototype,"componentDidMount",{writable:true,configurable:true,value:function() {"use strict";

    }});

    Object.defineProperty(Message.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";

        return (
        React.createElement("div", {className: 'message_Container '+this.props.class}, 
            React.createElement("div", {className: 'msg_box '+this.props.state}, 
                React.createElement("div", {className: "p_text"}, this.format(this.props.message))
            )
        )
        )
    }});



module.exports = Message;