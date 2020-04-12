var React = require('react');
var reactClass = require('create-react-class');
var ReactDom = require('react-dom');
var css = require('./home-finn.css')

const Hamburger = require('../lib/hamburger/hamburger.js');
const Content = require('./lib/content-home/content-home.js');
const Twocontent = require('./lib/twocontent-home/twocontent-home.js');
const Threecontent = require('./lib/threecontent-home/threecontent-home.js');
const Footer = require('./lib/footer-home/footer-home.js');

var ____Class18=React.Component;for(var ____Class18____Key in ____Class18){if(____Class18.hasOwnProperty(____Class18____Key)){Home[____Class18____Key]=____Class18[____Class18____Key];}}var ____SuperProtoOf____Class18=____Class18===null?null:____Class18.prototype;Home.prototype=Object.create(____SuperProtoOf____Class18);Home.prototype.constructor=Home;Home.__superConstructor__=____Class18;
    
    function Home(props) {"use strict";
    ____Class18.call(this,props);
    this.state = {
            fetch: null
        };

        this.get_hamburger = this.get_hamburger.bind(this);
    
    }

    Object.defineProperty(Home.prototype,"get_hamburger",{writable:true,configurable:true,value:function(action) {"use strict";

        fetch(action)
            .then(function(response)  {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong');
                }
            })
            .then(function(responseJson)  {
                this.setState({fetch: responseJson})
            }.bind(this))
            .catch(function(error)  {
                console.log('menu server error => ',error);
            }) 
    }});

    Object.defineProperty(Home.prototype,"componentWillMount",{writable:true,configurable:true,value:function() {"use strict";
        this.get_hamburger('/login_menu')
    }});
    
    Object.defineProperty(Home.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
        
        return (
            React.createElement("div", {className: "containter"}, 
                React.createElement(Hamburger, {menu: this.state.fetch}), 
                React.createElement(Content, null), 
                React.createElement(Twocontent, null), 
                React.createElement(Threecontent, null), 
                React.createElement(Footer, null)
            )
        )
    }});

;

module.exports = Home;

ReactDom.render(React.createElement(Home, null), document.querySelector('.home-finn') || document.createElement('div'));

