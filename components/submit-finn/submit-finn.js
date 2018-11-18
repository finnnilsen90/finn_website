var React = require('react');
var reactClass = require('create-react-class');
var ReactDom = require('react-dom');
var css = require('./submit-finn.css')

const Form = require('./lib/form-submit/form-submit.js');
const Hamburger = require('../lib/hamburger/hamburger.js')

var ____Class5=React.Component;for(var ____Class5____Key in ____Class5){if(____Class5.hasOwnProperty(____Class5____Key)){Submit[____Class5____Key]=____Class5[____Class5____Key];}}var ____SuperProtoOf____Class5=____Class5===null?null:____Class5.prototype;Submit.prototype=Object.create(____SuperProtoOf____Class5);Submit.prototype.constructor=Submit;Submit.__superConstructor__=____Class5;
    
    function Submit(props) {"use strict";
    ____Class5.call(this,props);
    this.state = {
            fetch: null
        };

        this.get_hamburger = this.get_hamburger.bind(this);
    
    }

    Object.defineProperty(Submit.prototype,"get_hamburger",{writable:true,configurable:true,value:function(action) {"use strict";

        fetch(action)
            .then(function(response)  {return response.json();})
            .then(function(responseJson)  {
                console.log(responseJson)
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
            React.createElement("div", {className: "containter"}, 
            
                React.createElement(Hamburger, {menu: this.state.fetch}), 
            
                React.createElement(Form, null)
            )
        )
    }});

;

module.exports = Submit;

ReactDom.render(React.createElement(Submit, null), document.querySelector('.submit-finn') || document.createElement('div'));

