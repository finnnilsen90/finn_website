const React = require('react');
const reactclass = require('create-react-class');
const css = require('./hamburger.css')

var ____Class6=React.Component;for(var ____Class6____Key in ____Class6){if(____Class6.hasOwnProperty(____Class6____Key)){Hamburger[____Class6____Key]=____Class6[____Class6____Key];}}var ____SuperProtoOf____Class6=____Class6===null?null:____Class6.prototype;Hamburger.prototype=Object.create(____SuperProtoOf____Class6);Hamburger.prototype.constructor=Hamburger;Hamburger.__superConstructor__=____Class6;
    
    function Hamburger(props) {"use strict";
    ____Class6.call(this,props);
    this.state = {
            hover: 0,
            toggle: true,
        };

        this.ham_click = this.ham_click.bind(this);
        this.links_compile = this.links_compile.bind(this);

    }

    Object.defineProperty(Hamburger.prototype,"links_compile",{writable:true,configurable:true,value:function(input) {"use strict";

        if (input!==undefined) {
            let value = Object.entries(input)
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

    Object.defineProperty(Hamburger.prototype,"return_error",{writable:true,configurable:true,value:function(menu) {"use strict";
        menu===undefined?console.error('please pass a menu object'):null;
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