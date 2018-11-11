const React = require('react');
const reactclass = require('create-react-class');
const css = require('./message.css')

var ____Class4=React.Component;for(var ____Class4____Key in ____Class4){if(____Class4.hasOwnProperty(____Class4____Key)){Message[____Class4____Key]=____Class4[____Class4____Key];}}var ____SuperProtoOf____Class4=____Class4===null?null:____Class4.prototype;Message.prototype=Object.create(____SuperProtoOf____Class4);Message.prototype.constructor=Message;Message.__superConstructor__=____Class4;
    
    function Message(props) {"use strict";
    ____Class4.call(this,props);
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