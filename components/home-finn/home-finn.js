var React = require('react');
var reactClass = require('create-react-class');
var ReactDom = require('react-dom');
var css = require('./home-finn.css')

const Hamburger = require('../lib/hamburger/hamburger.js')
const Content = require('./lib/content-home/content-home.js')

var ____Class1=React.Component;for(var ____Class1____Key in ____Class1){if(____Class1.hasOwnProperty(____Class1____Key)){Home[____Class1____Key]=____Class1[____Class1____Key];}}var ____SuperProtoOf____Class1=____Class1===null?null:____Class1.prototype;Home.prototype=Object.create(____SuperProtoOf____Class1);Home.prototype.constructor=Home;Home.__superConstructor__=____Class1;
    
    function Home(props) {"use strict";
    ____Class1.call(this,props);
    this.state = {
            test: 'Test'
        };
    
    }
    
    Object.defineProperty(Home.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
        
        return (
            React.createElement("div", {className: "containter"}, 
                React.createElement(Hamburger, null), 
                React.createElement(Content, null)
            )
        )
    }});

;

module.exports = Home;

ReactDom.render(React.createElement(Home, null), document.querySelector('.home-finn') || document.createElement('div'));

