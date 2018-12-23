var React = require('react');
var reactClass = require('create-react-class');
var ReactDom = require('react-dom');
var css = require('./create-finn.css')

const Form = require('./lib/form-create/form-create.js');
const Hamburger = require('../lib/hamburger/hamburger.js');
const Footer = require('../lib/footer/footer.js');


var ____Classb=React.Component;for(var ____Classb____Key in ____Classb){if(____Classb.hasOwnProperty(____Classb____Key)){Create[____Classb____Key]=____Classb[____Classb____Key];}}var ____SuperProtoOf____Classb=____Classb===null?null:____Classb.prototype;Create.prototype=Object.create(____SuperProtoOf____Classb);Create.prototype.constructor=Create;Create.__superConstructor__=____Classb;
    
    function Create(props) {"use strict";
    ____Classb.call(this,props);
    this.state = {
            fetch: null
        };

        this.get_hamburger = this.get_hamburger.bind(this);
    
    }

    Object.defineProperty(Create.prototype,"get_hamburger",{writable:true,configurable:true,value:function(action) {"use strict";

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

    Object.defineProperty(Create.prototype,"componentWillMount",{writable:true,configurable:true,value:function() {"use strict";
        this.get_hamburger('/login_menu')
    }});

    Object.defineProperty(Create.prototype,"componentDidMount",{writable:true,configurable:true,value:function() {"use strict";

    }});
    
    Object.defineProperty(Create.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
        
        return (
            React.createElement("div", {className: "container"}, 

                React.createElement(Hamburger, {menu: this.state.fetch}), 

                React.createElement(Form, null), 

                React.createElement(Footer, {menu: this.state.fetch})

            )
        )
    }});

;

module.exports = Create;

ReactDom.render(React.createElement(Create, null), document.querySelector('.create-finn') || document.createElement('div'));

