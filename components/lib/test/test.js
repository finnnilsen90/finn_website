const React = require('react');
const reactclass = require('create-react-class');
const css = require('./test.css')

var ____Class6=React.Component;for(var ____Class6____Key in ____Class6){if(____Class6.hasOwnProperty(____Class6____Key)){Test[____Class6____Key]=____Class6[____Class6____Key];}}var ____SuperProtoOf____Class6=____Class6===null?null:____Class6.prototype;Test.prototype=Object.create(____SuperProtoOf____Class6);Test.prototype.constructor=Test;Test.__superConstructor__=____Class6;
    
    function Test(props) {"use strict";
    ____Class6.call(this,props);
    this.state = {
            test: 0
        };

       this.click = this.click.bind(this)
    }

    Object.defineProperty(Test.prototype,"click",{writable:true,configurable:true,value:function() {"use strict";
        this.setState(function(chng)  {return {test:1};});
    }});


    Object.defineProperty(Test.prototype,"componentDidMount",{writable:true,configurable:true,value:function() {"use strict";
        // document.querySelector('test').addEventListener('click', ()=> {
        //     this.click()
        // })

    }});
    Object.defineProperty(Test.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";

        return (
        React.createElement("div", {className: "test_Container"}, 
            React.createElement("div", {className: "test", onClick: this.click()}, this.state.test)
        )
        )
    }});



module.exports = Test;