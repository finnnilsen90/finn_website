const React = require('react');
const reactclass = require('create-react-class');
const css = require('./hamburger.css')

var ____Classc=React.Component;for(var ____Classc____Key in ____Classc){if(____Classc.hasOwnProperty(____Classc____Key)){Hamburger[____Classc____Key]=____Classc[____Classc____Key];}}var ____SuperProtoOf____Classc=____Classc===null?null:____Classc.prototype;Hamburger.prototype=Object.create(____SuperProtoOf____Classc);Hamburger.prototype.constructor=Hamburger;Hamburger.__superConstructor__=____Classc;
    
    function Hamburger(props) {"use strict";
    ____Classc.call(this,props);
    this.state = {
            hover: 0,
            toggle: true,
            default:  { login: {
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
        let new_input = input || this.state.default;
        if (typeof(new_input)==='object') {
            let value = Object.entries(new_input);
            let menu = []
            for (let i=0;i<value.length;i++) {
                menu.push(React.createElement("li", {className: value[i][1].className, href: value[i][1].link}, value[i][1].text));
            }

            return menu

        } else {

            let example = {menu: {
                    button_one: {
                        link: 'navigation link',
                        className: 'class of element',
                        text: 'what goes in the button'
                    },
                    button_two: {
                        link: 'navigation link',
                        className: 'class of element',
                        text: 'what goes in the button'
                    }
                }
            }

            console.error('please pass a menu object');
            console.log('Please use the bellow object framework');
            console.log(example)
            console.log('once the object is made please pass it as a prop in the react state.')

            
        }

    }});

    Object.defineProperty(Hamburger.prototype,"return_error",{writable:true,configurable:true,value:function(input) {"use strict";
    
        menu!==Object?console.error('please pass a menu object'):null;
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
                    this.links_compile(this.props.menu)
                )
            )
        )
        )
    }});


module.exports = Hamburger;