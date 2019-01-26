const React = require('react');
const reactclass = require('create-react-class');
const css = require('./slider-home.css')

var ____Class2=React.Component;for(var ____Class2____Key in ____Class2){if(____Class2.hasOwnProperty(____Class2____Key)){Slider[____Class2____Key]=____Class2[____Class2____Key];}}var ____SuperProtoOf____Class2=____Class2===null?null:____Class2.prototype;Slider.prototype=Object.create(____SuperProtoOf____Class2);Slider.prototype.constructor=Slider;Slider.__superConstructor__=____Class2;
    
    function Slider(props) {"use strict";
    ____Class2.call(this,props);
    this.state = {
            test: ''
        };
       
    }
     

    Object.defineProperty(Slider.prototype,"componentDidMount",{writable:true,configurable:true,value:function() {"use strict";

    }});
    Object.defineProperty(Slider.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";

        return (
        React.createElement("div", {className: "slider-home_Container"}, 
            "CONTENT"
        )
        )
    }});



module.exports = Slider;