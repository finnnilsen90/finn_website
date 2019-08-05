var React = require('react');
var reactClass = require('create-react-class');
var ReactDom = require('react-dom');
var css = require('./resume-finn.css')

const Hamburger = require('../lib/hamburger/hamburger.js');
const Outline = require('./lib/outline-resume/outline-resume.js');
const Footer = require('../lib/footer/footer.js');

var ____ClassD=React.Component;for(var ____ClassD____Key in ____ClassD){if(____ClassD.hasOwnProperty(____ClassD____Key)){Resume[____ClassD____Key]=____ClassD[____ClassD____Key];}}var ____SuperProtoOf____ClassD=____ClassD===null?null:____ClassD.prototype;Resume.prototype=Object.create(____SuperProtoOf____ClassD);Resume.prototype.constructor=Resume;Resume.__superConstructor__=____ClassD;
    
    function Resume(props) {"use strict";
    ____ClassD.call(this,props);
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

        // console.log('height func invoked')
        // this.chng_dimension()

    }});
    
    Object.defineProperty(Resume.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
        
        return (
            React.createElement("div", {className: "container"}, 
                React.createElement(Hamburger, {menu: this.state.fetch}), 
                React.createElement(Outline, null), 
                React.createElement(Footer, {menu: this.state.fetch})
            )
        )
    }});

;

module.exports = Resume;

ReactDom.render(React.createElement(Resume, null), document.querySelector('.resume-finn') || document.createElement('div'));

