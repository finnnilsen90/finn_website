const React = require('react');
const reactclass = require('create-react-class');
const css = require('./slider-home.css')

var ____Class11=React.Component;for(var ____Class11____Key in ____Class11){if(____Class11.hasOwnProperty(____Class11____Key)){Slider[____Class11____Key]=____Class11[____Class11____Key];}}var ____SuperProtoOf____Class11=____Class11===null?null:____Class11.prototype;Slider.prototype=Object.create(____SuperProtoOf____Class11);Slider.prototype.constructor=Slider;Slider.__superConstructor__=____Class11;
    
    function Slider(props) {"use strict";
    ____Class11.call(this,props);
    this.state = {
            switch: true,
            div_switch:true,
            slide_state: 0,
            compiled_content: [],
            content: {
                content1: {
                    title: 'Content One',
                    content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
                },
                content2: {
                    title: 'Content Two',
                    content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
                }
            }
        };

        this.timeout = this.timeout.bind(this);
        this.compile = this.compile.bind(this);
        this.child_swap = this.child_swap.bind(this);

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
            menu.push(React.createElement("div", {className: class_name+' slide_cont'}, React.createElement("h2", null, value[i][1].title), React.createElement("div", {className: "slider_class"}, value[i][1].content)))
        }
        
        this.setState({compiled_content: menu})
    }});

    Object.defineProperty(Slider.prototype,"child_swap",{writable:true,configurable:true,value:function(bool,state1) {"use strict";
        let a = state1!==0?state1-1:0;
        let b = state1!==0?state1:state1+1

        let div1 = React.createElement("div", {className: this.state.switch?'div1 slider_func':'div1 slider_func closed'}, this.state.compiled_content[a]);
        let div2 = React.createElement("div", {className: this.state.switch?'div2 slider_func closed':'div2 slider_func'}, this.state.compiled_content[b]);

        let div3 = React.createElement("div", {className: this.state.switch?'div1 slider_func closed':'div1 slider_func'}, this.state.compiled_content[a]);
        let div4 = React.createElement("div", {className: this.state.switch?'div2 slider_func':'div2 slider_func closed'}, this.state.compiled_content[b]);
        if (bool) {
            return [div1, div2]
        } else {
            return [div3, div4]
        }
        
    }});

    Object.defineProperty(Slider.prototype,"timeout",{writable:true,configurable:true,value:function() {"use strict";
        let num = this.state.slide_state;
        let cont_len=this.state.compiled_content.length;
        let even = [1,2]
        if (even.includes(num)) {
            this.setState(function(prevState)  {return {
                switch: !prevState.switch
              };});
        }
        
        setTimeout(function()  {
            if(num<cont_len-1) {
                num+=1;
            } else {
                num=0;
            }

            this.setState({slide_state:num})
                
            this.setState(function(prevState)  {return {
                switch: !prevState.switch
            };});
            
            this.timeout()
        }.bind(this),3000)

    }});

    Object.defineProperty(Slider.prototype,"componentDidMount",{writable:true,configurable:true,value:function() {"use strict";
        this.compile()
        this.timeout()
    }});
    Object.defineProperty(Slider.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";

        return (
        React.createElement("div", {className: "slider-home_Container"}, 
            /* <div className={this.state.div1?'div1 slider_func':'div1 slider_func closed'}>
                {this.state.compiled_content[this.state.slide_state]}
            </div>
            <div className={this.state.div2?'div2 slider_func':'div2 slider_func closed'}>
                {this.state.compiled_content[this.state.slide_state]}
            </div> */
            React.createElement("div", {className: "outer"}, 
                this.child_swap(this.state.div_switch,this.state.slide_state)
            )
        )
        )
    }});



module.exports = Slider;