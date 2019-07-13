var React = require('react');
var reactClass = require('create-react-class');
var ReactDom = require('react-dom');
var css = require('./resume-finn.css')

<<<<<<< HEAD
const Hamburger = require('../lib/hamburger/hamburger.js');
const Outline = require('./lib/outline-resume/outline-resume.js');
const Footer = require('../lib/footer/footer.js');

var ____Class3=React.Component;for(var ____Class3____Key in ____Class3){if(____Class3.hasOwnProperty(____Class3____Key)){Resume[____Class3____Key]=____Class3[____Class3____Key];}}var ____SuperProtoOf____Class3=____Class3===null?null:____Class3.prototype;Resume.prototype=Object.create(____SuperProtoOf____Class3);Resume.prototype.constructor=Resume;Resume.__superConstructor__=____Class3;
    
    function Resume(props) {"use strict";
    ____Class3.call(this,props);
    this.state = {
            test: 'Test'
        };
    
    }
=======
const Outline = require('./lib/outline-resume/outline-resume.js')
const Hamburger = require('../lib/hamburger/hamburger.js');
const Footer = require('../lib/footer/footer.js');

var ____Classc=React.Component;for(var ____Classc____Key in ____Classc){if(____Classc.hasOwnProperty(____Classc____Key)){Resume[____Classc____Key]=____Classc[____Classc____Key];}}var ____SuperProtoOf____Classc=____Classc===null?null:____Classc.prototype;Resume.prototype=Object.create(____SuperProtoOf____Classc);Resume.prototype.constructor=Resume;Resume.__superConstructor__=____Classc;
    
    function Resume(props) {"use strict";
    ____Classc.call(this,props);
    this.state = {
            fetch: null
        };

        this.chng_dimension = this.chng_dimension.bind(this);
        this.get_hamburger = this.get_hamburger.bind(this);
    
    }

    
    Object.defineProperty(Resume.prototype,"chng_dimension",{writable:true,configurable:true,value:function() {"use strict";

        let body = document.body,
            html = document.documentElement;

        let height = Math.max( body.scrollHeight, body.offsetHeight, 
                    html.clientHeight, html.scrollHeight, html.offsetHeight );

        let cont_element = document.querySelector('.container');
        cont_element.style.height = String(height) + 'px';
            
    }});

    Object.defineProperty(Resume.prototype,"get_hamburger",{writable:true,configurable:true,value:function(action) {"use strict";

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

    Object.defineProperty(Resume.prototype,"componentWillMount",{writable:true,configurable:true,value:function() {"use strict";
        this.get_hamburger('/login_menu')
    }});

    Object.defineProperty(Resume.prototype,"componentDidMount",{writable:true,configurable:true,value:function() {"use strict";
        if (window.innerHeight > 750) {
            this.chng_dimension()
        }
    }});
>>>>>>> 7f05f87c3bb08861a8fb8d12b51e48b9230a18e6
    
    Object.defineProperty(Resume.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
        
        return (
            React.createElement("div", {className: "container"}, 
<<<<<<< HEAD
                React.createElement(Hamburger, null), 
                React.createElement(Outline, null), 
                React.createElement(Footer, null)
=======
                React.createElement(Hamburger, {menu: this.state.fetch}), 
                React.createElement(Outline, null), 
                React.createElement(Footer, {menu: this.state.fetch})
>>>>>>> 7f05f87c3bb08861a8fb8d12b51e48b9230a18e6
            )
        )
    }});

;

module.exports = Resume;

ReactDom.render(React.createElement(Resume, null), document.querySelector('.resume-finn') || document.createElement('div'));

