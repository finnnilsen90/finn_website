var React = require('react');
var reactClass = require('create-react-class');
var ReactDom = require('react-dom');
var css = require('./home-finn.css')

const Hamburger = require('../lib/hamburger/hamburger.js')
const Content = require('./lib/content-home/content-home.js')

var ____Classr=React.Component;for(var ____Classr____Key in ____Classr){if(____Classr.hasOwnProperty(____Classr____Key)){Home[____Classr____Key]=____Classr[____Classr____Key];}}var ____SuperProtoOf____Classr=____Classr===null?null:____Classr.prototype;Home.prototype=Object.create(____SuperProtoOf____Classr);Home.prototype.constructor=Home;Home.__superConstructor__=____Classr;
    
    function Home(props) {"use strict";
    ____Classr.call(this,props);
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

