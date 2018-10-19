const React = require('react');
const reactclass = require('create-react-class');
const css = require('./footer.css');

var ____Class1=React.Component;for(var ____Class1____Key in ____Class1){if(____Class1.hasOwnProperty(____Class1____Key)){Footer[____Class1____Key]=____Class1[____Class1____Key];}}var ____SuperProtoOf____Class1=____Class1===null?null:____Class1.prototype;Footer.prototype=Object.create(____SuperProtoOf____Class1);Footer.prototype.constructor=Footer;Footer.__superConstructor__=____Class1;
    
    function Footer(props) {"use strict";
    ____Class1.call(this,props);
    this.state = {
            test: '',
            links:  {
                login: {
                    link: '/logout',
                    className: 'link_footer',
                    text: 'Logout'
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
       
    } 

    Object.defineProperty(Footer.prototype,"links_compile",{writable:true,configurable:true,value:function(input) {"use strict";

        let value = Object.entries(input)
        let menu = []
        for (let i=0;i<value.length;i++) {
            menu.push(React.createElement("li", {className: value[i][1].className, href: value[i][1].link}, value[i][1].text));
        }

        return menu

    }});

    Object.defineProperty(Footer.prototype,"componentDidMount",{writable:true,configurable:true,value:function() {"use strict";

    }});
    Object.defineProperty(Footer.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";

        return (
        React.createElement("div", {className: "footer_Container"}, 
            React.createElement("div", {className: "nav"}, 
                React.createElement("ul", null, 
                    this.links_compile(this.state.links)
                )
            )
        )
        )
    }});



module.exports = Footer;