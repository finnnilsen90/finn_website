const React = require('react');
const reactclass = require('create-react-class');
const css = require('./box-login.css')

const Button_two = require('../../../lib/button-two/button-two.js');

var ____Class2=React.Component;for(var ____Class2____Key in ____Class2){if(____Class2.hasOwnProperty(____Class2____Key)){Box[____Class2____Key]=____Class2[____Class2____Key];}}var ____SuperProtoOf____Class2=____Class2===null?null:____Class2.prototype;Box.prototype=Object.create(____SuperProtoOf____Class2);Box.prototype.constructor=Box;Box.__superConstructor__=____Class2;
    
    function Box(props) {"use strict";
    ____Class2.call(this,props);
    this.state = {
            test: ''
        };
       
    }
 

    Object.defineProperty(Box.prototype,"componentDidMount",{writable:true,configurable:true,value:function() {"use strict";

    }});

    Object.defineProperty(Box.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";

        return (
        React.createElement("div", {className: "box-login_Container"}, 
            React.createElement("div", {className: "box"}, 

                React.createElement(Button_two, {name: "Login", href: "./"})

            )
        )
        )
    }});



module.exports = Box;