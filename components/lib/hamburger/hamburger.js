const React = require('react');
const reactclass = require('create-react-class');
const css = require('./hamburger.css')

var ____ClassC=React.Component;for(var ____ClassC____Key in ____ClassC){if(____ClassC.hasOwnProperty(____ClassC____Key)){Hamburger[____ClassC____Key]=____ClassC[____ClassC____Key];}}var ____SuperProtoOf____ClassC=____ClassC===null?null:____ClassC.prototype;Hamburger.prototype=Object.create(____SuperProtoOf____ClassC);Hamburger.prototype.constructor=Hamburger;Hamburger.__superConstructor__=____ClassC;
    
    function Hamburger(props) {"use strict";
    ____ClassC.call(this,props);
    this.state = {
            hover: 0,
            toggle: true,
            links: {
                login: {
                    link: '/login',
                    className: 'link',
                    text: 'Login'
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

        this.ham_enter = this.ham_enter.bind(this);
        this.ham_leave = this.ham_leave.bind(this);
        this.ham_click = this.ham_click.bind(this);

        this.links_compile = this.links_compile.bind(this);
        this.toggle = this.toggle.bind(this);


    }

    Object.defineProperty(Hamburger.prototype,"toggle",{writable:true,configurable:true,value:function() {"use strict";
        let dropdown = document.querySelector('.dropdown');
        let state = this.state.toggle;

         this.setState(function(prevState)  {return {
            toggle: !prevState.toggle
        };});

        if (state) {
            dropdown.style.display= 'block';
        } else {
            dropdown.style.display= 'none';
        }
    }});

    Object.defineProperty(Hamburger.prototype,"links_compile",{writable:true,configurable:true,value:function(input) {"use strict";

        let value = Object.entries(input)
        let menu = []
        for (let i=0;i<value.length;i++) {
            menu.push(React.createElement("li", {className: value[i][1].className, href: value[i][1].link}, value[i][1].text));
        }

        return menu

    }});

    Object.defineProperty(Hamburger.prototype,"ham_enter",{writable:true,configurable:true,value:function() {"use strict";
        let color = "#2bff72";
        let num = this.state.hover;
        let chng_hr = document.querySelector('.hamburger');
        let clr_chng = chng_hr.childNodes;
        clr_chng[num].style.border="2px solid "+color;
        if (num < 2) {
            this.setState(function(chng)  {return {hover:num+1};});
            setTimeout(function() {this.ham_enter()}.bind(this),100);
        } else {
            this.setState(function(chng)  {return {hover:0};});
        }
    }});

    Object.defineProperty(Hamburger.prototype,"ham_leave",{writable:true,configurable:true,value:function() {"use strict";

        let chng_hr = document.querySelector('.hamburger');
        let chng_child = document.querySelector('.hamburger').childNodes;

        for (let i=0;i<chng_child.length;i++) {
            chng_child[i].style.border="2px solid grey";
        }
        chng_hr.style.border="3px solid grey";

    }});

    Object.defineProperty(Hamburger.prototype,"ham_click",{writable:true,configurable:true,value:function() {"use strict";
        this.toggle();

        let toggle = this.state.toggle;
        let chng_hr = document.querySelector('.hamburger');
        let chng_child = document.querySelector('.hamburger').childNodes;

        if (toggle) {
            for (let i=0;i<chng_child.length;i++) {
                chng_child[i].style.border="2px solid #2bff72";
            }         
        } else {
            for (let i=0;i<chng_child.length;i++) {
                chng_child[i].style.border="2px solid grey";
            }
        }
    }});
     
    Object.defineProperty(Hamburger.prototype,"componentDidMount",{writable:true,configurable:true,value:function() {"use strict";

    }});
    Object.defineProperty(Hamburger.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";

        return (
        React.createElement("div", {className: "libcomp-styleguid_Container"}, 
            React.createElement("div", {className: "ham_container"}, 
                React.createElement("div", {className: "hamburger", onMouseEnter: this.ham_enter, onMouseLeave: this.ham_leave, onClick: this.ham_click}, 
                    React.createElement("hr", null), 
                    React.createElement("hr", null), 
                    React.createElement("hr", null)
                )
            ), 
            React.createElement("div", {className: "dropdown", onClick: this.toggle}, 
                React.createElement("ul", null, 
                    this.links_compile(this.state.links)
                )
            )
        )
        )
    }});


module.exports = Hamburger;