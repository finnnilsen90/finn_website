var React = require('react');
var reactClass = require('create-react-class');
var ReactDom = require('react-dom');
var css = require('./home-finn.css')

const Hamburger = require('../lib/hamburger/hamburger.js');
const Content = require('./lib/content-home/content-home.js');
const Twocontent = require('./lib/twocontent-home/twocontent-home.js');
const Threecontent = require('./lib/threecontent-home/threecontent-home.js');

var ____Class8=React.Component;for(var ____Class8____Key in ____Class8){if(____Class8.hasOwnProperty(____Class8____Key)){Home[____Class8____Key]=____Class8[____Class8____Key];}}var ____SuperProtoOf____Class8=____Class8===null?null:____Class8.prototype;Home.prototype=Object.create(____SuperProtoOf____Class8);Home.prototype.constructor=Home;Home.__superConstructor__=____Class8;
    
    function Home(props) {"use strict";
    ____Class8.call(this,props);
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
                React.createElement(Threecontent, null)
            )
        )
    }});

;

module.exports = Home;

ReactDom.render(React.createElement(Home, null), document.querySelector('.home-finn') || document.createElement('div'));

