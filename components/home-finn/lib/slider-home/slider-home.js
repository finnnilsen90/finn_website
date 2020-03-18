const React = require('react');
const reactclass = require('create-react-class');
const css = require('./slider-home.css')

var ____Class0=React.Component;for(var ____Class0____Key in ____Class0){if(____Class0.hasOwnProperty(____Class0____Key)){Slider[____Class0____Key]=____Class0[____Class0____Key];}}var ____SuperProtoOf____Class0=____Class0===null?null:____Class0.prototype;Slider.prototype=Object.create(____SuperProtoOf____Class0);Slider.prototype.constructor=Slider;Slider.__superConstructor__=____Class0;
    
    function Slider(props) {"use strict";
    ____Class0.call(this,props);
    this.state = {
            content: {
                content1: {
                    title: 'Associate Director, Media and Technology',
                    link: '/resume',
                    content: 'Mogo Interactive'
                },
                content2: {
                    title: 'Product Manager',
                    link: '/resume',
                    content: 'Mogo Interactive'
                },
                content3: {
                    title: 'ChatScript Developer',
                    link: '/resume',
                    content: 'JustAnswer.com'
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