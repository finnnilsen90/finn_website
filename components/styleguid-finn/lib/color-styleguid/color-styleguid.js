const React = require('react');
const reactclass = require('create-react-class');
const css = require('./color-styleguid.css')

var ____Class1=React.Component;for(var ____Class1____Key in ____Class1){if(____Class1.hasOwnProperty(____Class1____Key)){Color[____Class1____Key]=____Class1[____Class1____Key];}}var ____SuperProtoOf____Class1=____Class1===null?null:____Class1.prototype;Color.prototype=Object.create(____SuperProtoOf____Class1);Color.prototype.constructor=Color;Color.__superConstructor__=____Class1;
    
    function Color(props) {"use strict";
    ____Class1.call(this,props);
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