const React = require('react');
const reactclass = require('create-react-class');
const css = require('./test-medium.css')

var ____Classk=React.Component;for(var ____Classk____Key in ____Classk){if(____Classk.hasOwnProperty(____Classk____Key)){Test[____Classk____Key]=____Classk[____Classk____Key];}}var ____SuperProtoOf____Classk=____Classk===null?null:____Classk.prototype;Test.prototype=Object.create(____SuperProtoOf____Classk);Test.prototype.constructor=Test;Test.__superConstructor__=____Classk;
    
    function Test(props) {"use strict";
    ____Classk.call(this,props);
    this.state = {
            disabled: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    Object.defineProperty(Test.prototype,"handleClick",{writable:true,configurable:true,value:function() {"use strict";
        this.setState({
            disabled: !this.state.disabled,
        });
    }});;
    Object.defineProperty(Test.prototype,"componentDidMount",{writable:true,configurable:true,value:function() {"use strict";
        let test = document.querySelector('button');
        window.addEventListener('resize', function(x)  {
            console.log('ran')
        })
    }});

    Object.defineProperty(Test.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
        return (
        React.createElement("div", null, 
            React.createElement("button", {type: "button", onClick: this.handleClick}, 
            "First Button"
            ), 
            React.createElement("button", {type: "button", disabled: this.state.disabled}, 
            "Second Button"
            )
        )
        );
    }});



module.exports = Test;