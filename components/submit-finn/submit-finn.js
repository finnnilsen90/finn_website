var React = require('react');
var reactClass = require('create-react-class');
var ReactDom = require('react-dom');
var css = require('./submit-finn.css')

const Form = require('./lib/form-submit/form-submit.js');
const Hamburger = require('../lib/hamburger/hamburger.js');
const Footer = require('../lib/footer/footer.js');

var ____ClassF=React.Component;for(var ____ClassF____Key in ____ClassF){if(____ClassF.hasOwnProperty(____ClassF____Key)){Submit[____ClassF____Key]=____ClassF[____ClassF____Key];}}var ____SuperProtoOf____ClassF=____ClassF===null?null:____ClassF.prototype;Submit.prototype=Object.create(____SuperProtoOf____ClassF);Submit.prototype.constructor=Submit;Submit.__superConstructor__=____ClassF;
    
    function Submit(props) {"use strict";
    ____ClassF.call(this,props);
    this.state = {
            fetch: null
        };

        this.chng_dimension = this.chng_dimension.bind(this);
        this.get_hamburger = this.get_hamburger.bind(this);
    
    }

    Object.defineProperty(Submit.prototype,"chng_dimension",{writable:true,configurable:true,value:function() {"use strict";
        let body = document.body,
            html = document.documentElement;

        let height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
   
        console.log('screen width => ',screen.height)
        // let elem_height = screen.height;
        let cont_element = document.querySelector('.container');

        cont_element.style.height = String(height) + 'px';
        
    }});

    Object.defineProperty(Submit.prototype,"get_hamburger",{writable:true,configurable:true,value:function(action) {"use strict";

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

    Object.defineProperty(Submit.prototype,"componentWillMount",{writable:true,configurable:true,value:function() {"use strict";
        this.get_hamburger('/login_menu')
    }});

    Object.defineProperty(Submit.prototype,"componentDidMount",{writable:true,configurable:true,value:function() {"use strict";

        // if (window.innerWidth > 501) {
            this.chng_dimension()
        // }
      
    }});
    
    Object.defineProperty(Submit.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
        
        return (
            React.createElement("div", {className: "container"}, 
            
                React.createElement(Hamburger, {menu: this.state.fetch}), 

                React.createElement(Form, null), 

                React.createElement(Footer, {menu: this.state.fetch})

            )
        )
    }});

;

module.exports = Submit;

ReactDom.render(React.createElement(Submit, null), document.querySelector('.submit-finn') || document.createElement('div'));

