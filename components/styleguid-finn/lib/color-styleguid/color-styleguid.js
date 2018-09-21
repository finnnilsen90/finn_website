const React = require('react');
const reactclass = require('create-react-class');
const css = require('./color-styleguid.css')

var ____Classb=React.Component;for(var ____Classb____Key in ____Classb){if(____Classb.hasOwnProperty(____Classb____Key)){Color[____Classb____Key]=____Classb[____Classb____Key];}}var ____SuperProtoOf____Classb=____Classb===null?null:____Classb.prototype;Color.prototype=Object.create(____SuperProtoOf____Classb);Color.prototype.constructor=Color;Color.__superConstructor__=____Classb;
    
    function Color(props) {"use strict";
    ____Classb.call(this,props);
    this.state = {
            test: ''
        };
       
    }
    

    Object.defineProperty(Color.prototype,"componentDidMount",{writable:true,configurable:true,value:function() {"use strict";
    }});
    Object.defineProperty(Color.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";

        return (
        React.createElement("div", {className: "color-styleguid_Container"}, 
            React.createElement("h2", null, "Color Pallet"), 
            React.createElement("div", {className: 'primary_color '+'color_dimension'}), 
            React.createElement("div", {className: 'secondary_color '+'color_dimension'}), 
            React.createElement("div", {className: 'background_color '+'color_dimension'}), 
            React.createElement("div", {className: 'secondary_background_color '+'color_dimension'}), 
            React.createElement("div", {className: 'offset '+'color_dimension'})
        )
        )
    }});



module.exports = Color;