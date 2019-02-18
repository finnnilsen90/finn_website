var React = require('react');
var reactClass = require('create-react-class');
var ReactDom = require('react-dom');
var css = require('./home-finn.css')

const Hamburger = require('../lib/hamburger/hamburger.js')
const Content = require('./lib/content-home/content-home.js')

var ____Classk=React.Component;for(var ____Classk____Key in ____Classk){if(____Classk.hasOwnProperty(____Classk____Key)){Home[____Classk____Key]=____Classk[____Classk____Key];}}var ____SuperProtoOf____Classk=____Classk===null?null:____Classk.prototype;Home.prototype=Object.create(____SuperProtoOf____Classk);Home.prototype.constructor=Home;Home.__superConstructor__=____Classk;
    
    function Home(props) {"use strict";
    ____Classk.call(this,props);
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

