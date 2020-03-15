const React = require('react');
const reactclass = require('create-react-class');
const css = require('./content-dropdown.css')

var ____Class3=React.Component;for(var ____Class3____Key in ____Class3){if(____Class3.hasOwnProperty(____Class3____Key)){Content[____Class3____Key]=____Class3[____Class3____Key];}}var ____SuperProtoOf____Class3=____Class3===null?null:____Class3.prototype;Content.prototype=Object.create(____SuperProtoOf____Class3);Content.prototype.constructor=Content;Content.__superConstructor__=____Class3;
    
    function Content(props) {"use strict";
    ____Class3.call(this,props);
    this.state = {
            arrow: false,
            title: null,
            title_click: null,
            arw: null,
            arw_click: null,
            cont_par: null,
            cont_hr: null
        };

        this.random = this.random.bind(this);
        this.arrow_state = this.arrow_state.bind(this);
       
    }

    Object.defineProperty(Content.prototype,"random",{writable:true,configurable:true,value:function() {"use strict";
        let rand = this.props.class
        
        this.setState(function()  {return {
            title: 'title_'+rand,
            title_click: 'title_click_'+rand,
            arw: 'arw_'+rand,
            arw_click: 'arw_click_'+rand,
            cont_par: 'cont_par_'+rand,
            cont_hr: 'cont_hr_'+rand 
        };})
    }});

    Object.defineProperty(Content.prototype,"arrow_state",{writable:true,configurable:true,value:function() {"use strict";
        // let arrow = document.querySelector('.arrow');
        // let arrow_click = document.querySelector('.arrow_click');

        this.setState(function(chng)  {return {
            arrow: !chng.arrow
        };});
        let state = this.state.arrow;

        if (state) {
            document.querySelector('.'+this.state.title).style.display = 'block';
            document.querySelector('.'+this.state.arw).style.display = 'block';
            document.querySelector('.'+this.state.cont_hr).style.display = 'block';
            document.querySelector('.'+this.state.title_click).style.display = 'none';
            document.querySelector('.'+this.state.cont_par).style.display = 'none';
            document.querySelector('.'+this.state.arw_click).style.display = 'none';
        } else {
            document.querySelector('.'+this.state.title).style.display = 'none';
            document.querySelector('.'+this.state.arw).style.display = 'none';
            document.querySelector('.'+this.state.cont_hr).style.display = 'none';
            document.querySelector('.'+this.state.title_click).style.display = 'block';
            document.querySelector('.'+this.state.cont_par).style.display = 'block';
            document.querySelector('.'+this.state.arw_click).style.display = 'block';
        }
            
    }});

    Object.defineProperty(Content.prototype,"componentWillMount",{writable:true,configurable:true,value:function() {"use strict";
        this.random()
    }});

    Object.defineProperty(Content.prototype,"componentDidMount",{writable:true,configurable:true,value:function() {"use strict";
        
    }});
    Object.defineProperty(Content.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";

        return (
        React.createElement("div", {className: "content-dropdown_Container", onClick: this.arrow_state}, 
            React.createElement("h3", {className: 'title '+this.state.title}, this.props.title), 
            React.createElement("h3", {className: 'title_click '+this.state.title_click}, this.props.title), 
            React.createElement("div", {className: 'arrow '+this.state.arw}), 
            React.createElement("div", {className: 'arrow_click '+this.state.arw_click}), 
            React.createElement("hr", {className: 'content_hr '+this.state.cont_hr}), 
            React.createElement("div", {className: 'content_parent '+this.state.cont_par}, 
                React.createElement("div", {className: "input"}, this.props.content)
            )
        )
        )
    }});



module.exports = Content;