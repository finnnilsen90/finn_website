const React = require('react');
const reactclass = require('create-react-class');
const css = require('./slider-home.css')

var ____Classo=React.Component;for(var ____Classo____Key in ____Classo){if(____Classo.hasOwnProperty(____Classo____Key)){Slider[____Classo____Key]=____Classo[____Classo____Key];}}var ____SuperProtoOf____Classo=____Classo===null?null:____Classo.prototype;Slider.prototype=Object.create(____SuperProtoOf____Classo);Slider.prototype.constructor=Slider;Slider.__superConstructor__=____Classo;
    
    function Slider(props) {"use strict";
    ____Classo.call(this,props);
    this.state = {
            content: {
                content1: {
                    title: 'Resume',
                    link: '/resume',
                    content: 'Click to see my resmue!'
                },
                content2: {
                    title: 'Projects',
                    link: '/project',
                    content: 'Checkout some of the projects I have been apart of.'
                },
                content3: {
                    title: 'Contact',
                    link: '/contact',
                    content: 'If you would like to contact me click now.'
                }
            }
        };

        this.compile = this.compile.bind(this);

    }

    Object.defineProperty(Slider.prototype,"compile",{writable:true,configurable:true,value:function() {"use strict";
        let content = this.state.content;
        let value = Object.entries(content);
        let menu = [];
        let iter = 0;
        for(let i=0;i<value.length;i++) {
            iter+=1;
            let pos = 'content'+iter.toString()
            let class_name = 'slide'+iter.toString()
            menu.push(React.createElement("div", {className: class_name+' slide'}, React.createElement("a", {href: value[i][1].link}, React.createElement("h2", null, value[i][1].title), React.createElement("div", {className: "slider_class"}, value[i][1].content))))
        }
        
        return menu
    }});
  
    Object.defineProperty(Slider.prototype,"componentDidMount",{writable:true,configurable:true,value:function() {"use strict";
   
    }});
    Object.defineProperty(Slider.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";

        return (
        React.createElement("div", {className: 'slider-home_Container'+' font'}, 
            React.createElement("div", {className: "outer"}, 
                this.compile()
            )
        )
        )
    }});



module.exports = Slider;