const React = require('react');
const reactclass = require('create-react-class');
const css = require('./footer.css');

var ____ClassD=React.Component;for(var ____ClassD____Key in ____ClassD){if(____ClassD.hasOwnProperty(____ClassD____Key)){Footer[____ClassD____Key]=____ClassD[____ClassD____Key];}}var ____SuperProtoOf____ClassD=____ClassD===null?null:____ClassD.prototype;Footer.prototype=Object.create(____SuperProtoOf____ClassD);Footer.prototype.constructor=Footer;Footer.__superConstructor__=____ClassD;
    
    function Footer(props) {"use strict";
    ____ClassD.call(this,props);
    this.state = {
            links_invoked: '',
            test: '',
            links:  {
                login: {
                    link: '/login',
                    className: 'link_footer',
                    text: 'Login'
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
        this.links_comp_two = this.links_comp_two.bind(this);
        this.chng_state = this.chng_state.bind(this);
       
    } 

    Object.defineProperty(Footer.prototype,"chng_state",{writable:true,configurable:true,value:function() {"use strict";
        let prop = this.props.menu;

        if (prop) {
            return prop;
        } else {
            return this.state.links;
        }

    }});

    Object.defineProperty(Footer.prototype,"links_compile",{writable:true,configurable:true,value:function(input) {"use strict";
        let value = Object.entries(input)
        let menu = []
        let len = value.length>5?5:value.length;
        for (let i=0;i<len;i++) {
            menu.push(React.createElement("li", {className: value[i][1].className+' link_footer'}, React.createElement("a", {href: value[i][1].link}, value[i][1].text)));
        }

        return menu

    }});

    Object.defineProperty(Footer.prototype,"links_comp_two",{writable:true,configurable:true,value:function(input) {"use strict";
        let value = Object.entries(input);
        let menu = []
        for (let i=5;i<value.length;i++) {
            menu.push(React.createElement("li", {className: value[i][1].className+' link_footer'}, React.createElement("a", {href: value[i][1].link}, value[i][1].text)));
        }

        return menu

    }});

    Object.defineProperty(Footer.prototype,"componentDidMount",{writable:true,configurable:true,value:function() {"use strict";
        console.log('object length => ',this.chng_state())
        // if (Object.entries(this.chng_state()).length>5) {
            
        //     let nav_two = document.querySelector('.nav_two');
        //     nav_two.style.display = 'block';
        // }
    }});
    Object.defineProperty(Footer.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";

        return (
        React.createElement("div", {className: 'footer_Container'+' font'}, 
            React.createElement("div", {className: "nav"}, 
                React.createElement("ul", null, 
                    this.links_compile(this.chng_state())
                )
            ), 
            React.createElement("div", {className: 'nav'+' nav_two'}, 
                React.createElement("ul", null, 
                    this.links_comp_two(this.chng_state())
                )
            )
        )
        )
    }});



module.exports = Footer;