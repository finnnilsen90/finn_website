const React = require('react');
const reactclass = require('create-react-class');
const css = require('./footer.css');

var ____Classj=React.Component;for(var ____Classj____Key in ____Classj){if(____Classj.hasOwnProperty(____Classj____Key)){Footer[____Classj____Key]=____Classj[____Classj____Key];}}var ____SuperProtoOf____Classj=____Classj===null?null:____Classj.prototype;Footer.prototype=Object.create(____SuperProtoOf____Classj);Footer.prototype.constructor=Footer;Footer.__superConstructor__=____Classj;
    
    function Footer(props) {"use strict";
    ____Classj.call(this,props);
    this.state = {
            links_invoked: '',
            test: '',
            links:  {
                login: {
                    link: '/login',
                    className: 'link_footer',
                    text: 'Login test'
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
        let nav_two = document.querySelector('.nav_two');
        if (Object.entries(this.chng_state()).length>5) {
            nav_two.style.display = 'block';
        }
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