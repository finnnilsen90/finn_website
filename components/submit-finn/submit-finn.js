var React = require('react');
var reactClass = require('create-react-class');
var ReactDom = require('react-dom');
var css = require('./submit-finn.css')

const Form = require('./lib/form-submit/form-submit.js');
const Hamburger = require('../lib/hamburger/hamburger.js');
const Footer = require('../lib/footer/footer.js');

var ____Class6=React.Component;for(var ____Class6____Key in ____Class6){if(____Class6.hasOwnProperty(____Class6____Key)){Submit[____Class6____Key]=____Class6[____Class6____Key];}}var ____SuperProtoOf____Class6=____Class6===null?null:____Class6.prototype;Submit.prototype=Object.create(____SuperProtoOf____Class6);Submit.prototype.constructor=Submit;Submit.__superConstructor__=____Class6;
    
    function Submit(props) {"use strict";
    ____Class6.call(this,props);
    this.state = {
            fetch: null
        };

        this.get_hamburger = this.get_hamburger.bind(this);
    
    }

    Object.defineProperty(Submit.prototype,"get_hamburger",{writable:true,configurable:true,value:function(action) {"use strict";

        fetch(action)
            .then(function(response)  {return response.json();})
            .then(function(responseJson)  {
                this.setState({fetch: responseJson})
            }.bind(this)) 

    }});

    Object.defineProperty(Submit.prototype,"componentWillMount",{writable:true,configurable:true,value:function() {"use strict";
        this.get_hamburger('/login_menu')
    }});

    Object.defineProperty(Submit.prototype,"componentDidMount",{writable:true,configurable:true,value:function() {"use strict";

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

