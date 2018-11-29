const React = require('react');
const reactclass = require('create-react-class');
const css = require('./footer.css');

var ____Class4=React.Component;for(var ____Class4____Key in ____Class4){if(____Class4.hasOwnProperty(____Class4____Key)){Footer[____Class4____Key]=____Class4[____Class4____Key];}}var ____SuperProtoOf____Class4=____Class4===null?null:____Class4.prototype;Footer.prototype=Object.create(____SuperProtoOf____Class4);Footer.prototype.constructor=Footer;Footer.__superConstructor__=____Class4;
    
    function Footer(props) {"use strict";
    ____Class4.call(this,props);
    this.state = {
            test: '',
            links:  {
                login: {
                    link: '/login',
                    className: 'link_footer',
                    text: 'Login man'
                },
                home_page: {
                    link: '/home_page',
                    className: 'link_footer',
                    text: 'Home Page'
                },
                resume: {
                    link: '/resume',
                    className: 'link_footer',
                    text: 'Resume'
                },
                projects: {
                    link: '/home_page',
                    className: 'link_footer',
                    text: 'Projects'
                },
                contact: {
                    link: '/contact',
                    className: 'link_footer',
                    text: 'Contact'
                }
            }
        };

        this.links_compile = this.links_compile.bind(this);
        this.chng_state = this.chng_state.bind(this);
       
    } 

    Object.defineProperty(Footer.prototype,"chng_state",{writable:true,configurable:true,value:function() {"use strict";
        let prop = this.props.menu;
        console.log(prop)

        if (prop) {
            return prop;
        } else {
            return this.state.links;
        }

    }});

    Object.defineProperty(Footer.prototype,"links_compile",{writable:true,configurable:true,value:function(input) {"use strict";

        let value = Object.entries(input)
        let menu = []
        for (let i=0;i<value.length;i++) {
            menu.push(React.createElement("li", {className: value[i][1].className+' link_footer'}, React.createElement("a", {href: value[i][1].link}, value[i][1].text)));
        }

        return menu

    }});

    Object.defineProperty(Footer.prototype,"componentDidMount",{writable:true,configurable:true,value:function() {"use strict";
  
    }});
    Object.defineProperty(Footer.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";

        return (
        React.createElement("div", {className: 'footer_Container'+' font'}, 
            React.createElement("div", {className: "nav"}, 
                React.createElement("ul", null, 
                    this.links_compile(this.chng_state())
                )
            )
        )
        )
    }});



module.exports = Footer;