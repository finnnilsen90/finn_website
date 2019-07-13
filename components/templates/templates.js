var React = require('react');
var reactClass = require('create-react-class');
var ReactDom = require('react-dom');
var css = require('./templates.css')

const ChildConst = require('./lib/Libcomp/Libcomp.js');
const Hamburger = require('../lib/hamburger/hamburger.js');
const Footer = require('../lib/footer/footer.js');

var ____Class6=React.Component;for(var ____Class6____Key in ____Class6){if(____Class6.hasOwnProperty(____Class6____Key)){VarName[____Class6____Key]=____Class6[____Class6____Key];}}var ____SuperProtoOf____Class6=____Class6===null?null:____Class6.prototype;VarName.prototype=Object.create(____SuperProtoOf____Class6);VarName.prototype.constructor=VarName;VarName.__superConstructor__=____Class6;
    
    function VarName(props) {"use strict";
    ____Class6.call(this,props);
    this.state = {
            fetch: null
        };

        this.chng_dimension = this.chng_dimension.bind(this);
        this.get_hamburger = this.get_hamburger.bind(this);
    
    }

    Object.defineProperty(VarName.prototype,"chng_dimension",{writable:true,configurable:true,value:function() {"use strict";

        let body = document.body,
            html = document.documentElement;

        let height = Math.max( body.scrollHeight, body.offsetHeight, 
                    html.clientHeight, html.scrollHeight, html.offsetHeight );

        let cont_element = document.querySelector('.container');
        cont_element.style.height = String(height) + 'px';
            
    }});

    Object.defineProperty(VarName.prototype,"get_hamburger",{writable:true,configurable:true,value:function(action) {"use strict";

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

    Object.defineProperty(VarName.prototype,"componentWillMount",{writable:true,configurable:true,value:function() {"use strict";
        this.get_hamburger('/login_menu')
    }});

    Object.defineProperty(VarName.prototype,"componentDidMount",{writable:true,configurable:true,value:function() {"use strict";
        if (window.innerHeight > 750) {
            this.chng_dimension()
        }
    }});
    
    Object.defineProperty(VarName.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
        
        return (
            React.createElement("div", {className: "containter"}, 
                React.createElement(Hamburger, {menu: this.state.fetch}), 
                React.createElement(ChildConst, null), 
                React.createElement(Footer, {menu: this.state.fetch})
            )
        )
    }});

;

module.exports = VarName;

ReactDom.render(React.createElement(VarName, null), document.querySelector('.compName') || document.createElement('div'));

