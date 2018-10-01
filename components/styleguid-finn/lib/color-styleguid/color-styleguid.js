const React = require('react');
const reactclass = require('create-react-class');
const css = require('./color-styleguid.css')

var ____Class3=React.Component;for(var ____Class3____Key in ____Class3){if(____Class3.hasOwnProperty(____Class3____Key)){Color[____Class3____Key]=____Class3[____Class3____Key];}}var ____SuperProtoOf____Class3=____Class3===null?null:____Class3.prototype;Color.prototype=Object.create(____SuperProtoOf____Class3);Color.prototype.constructor=Color;Color.__superConstructor__=____Class3;
    
    function Color(props) {"use strict";
    ____Class3.call(this,props);
    this.state = {
            test: ''
        };
       
    }
    

    Object.defineProperty(Color.prototype,"componentDidMount",{writable:true,configurable:true,value:function() {"use strict";
    }});
    Object.defineProperty(Color.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";

        return (
        React.createElement("div", {className: "color-styleguid_Container"}, 
            React.createElement("h1", null, "Style Guide"), 
            React.createElement("div", {className: "header_container"}, 
                React.createElement("h2", {className: "header"}, "Color Pallet")
            ), 
            React.createElement("div", {className: 'primary_color '+'color_dimension'}), 
            React.createElement("div", {className: 'secondary_color '+'color_dimension'}), 
            React.createElement("div", {className: 'background_color '+'color_dimension'}), 
            React.createElement("div", {className: 'secondary_background_color '+'color_dimension'}), 
            React.createElement("div", {className: 'offset '+'color_dimension'})
        )
        )
    }});



module.exports = Color;