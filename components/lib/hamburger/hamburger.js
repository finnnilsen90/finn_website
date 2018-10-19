const React = require('react');
const reactclass = require('create-react-class');
const css = require('./hamburger.css')

var ____Class6=React.Component;for(var ____Class6____Key in ____Class6){if(____Class6.hasOwnProperty(____Class6____Key)){Hamburger[____Class6____Key]=____Class6[____Class6____Key];}}var ____SuperProtoOf____Class6=____Class6===null?null:____Class6.prototype;Hamburger.prototype=Object.create(____SuperProtoOf____Class6);Hamburger.prototype.constructor=Hamburger;Hamburger.__superConstructor__=____Class6;
    
    function Hamburger(props) {"use strict";
    ____Class6.call(this,props);
    this.state = {
            hover: 0,
            toggle: true,
            links: {
                login: {
                    link: '/logout',
                    className: 'link',
                    text: 'Logout'
                },
                home_page: {
                    link: '/home_page',
                    className: 'link',
                    text: 'Home Page'
                },
                resume: {
                    link: '/resume',
                    className: 'link',
                    text: 'Resume'
                },
                projects: {
                    link: '/home_page',
                    className: 'link',
                    text: 'Projects'
                },
                contact: {
                    link: '/contact',
                    className: 'link',
                    text: 'Contact'
                }
            }
        };

        this.ham_click = this.ham_click.bind(this);

        this.links_compile = this.links_compile.bind(this);

    }

    Object.defineProperty(Hamburger.prototype,"links_compile",{writable:true,configurable:true,value:function(input) {"use strict";

        let value = Object.entries(input)
        let menu = []
        for (let i=0;i<value.length;i++) {
            menu.push(React.createElement("li", {className: value[i][1].className, href: value[i][1].link}, value[i][1].text));
        }

        return menu

    }});

    Object.defineProperty(Hamburger.prototype,"ham_click",{writable:true,configurable:true,value:function() {"use strict";
        let chng_hr = document.querySelector('.hamburger');
        let chng_child = document.querySelector('.hamburger').childNodes;
        let dropdown = document.querySelector('.dropdown');
        let state = this.state.toggle;
        if (state) {
            dropdown.style.display= 'block';

            for (let i=0;i<chng_child.length;i++) {
                chng_child[i].style.border="2px solid #2bff72";
            }
            
            this.setState(function(prevState)  {return {
                toggle: !prevState.toggle
            };});
        } else {
            dropdown.style.display= 'none';

            for (let i=0;i<chng_child.length;i++) {
                chng_child[i].style.border="2px solid grey";
            }

            this.setState(function(prevState)  {return {
                toggle: !prevState.toggle
            };});
        }
         
    }});
     
    Object.defineProperty(Hamburger.prototype,"componentDidMount",{writable:true,configurable:true,value:function() {"use strict";

    }});
    Object.defineProperty(Hamburger.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";

        return (
        React.createElement("div", {className: "libcomp-hamburger_Container"}, 
            React.createElement("div", {className: "ham_container"}, 
                React.createElement("div", {className: "hamburger", onMouseLeave: this.ham_click, onMouseEnter: this.ham_click}, 
                    React.createElement("hr", null), 
                    React.createElement("hr", null), 
                    React.createElement("hr", null)
                )
            ), 
            React.createElement("div", {className: "dropdown_container"}, 
                React.createElement("ul", {className: "dropdown", onMouseLeave: this.ham_click}, 
                    this.links_compile(this.state.links)
                )
            )
        )
        )
    }});


module.exports = Hamburger;