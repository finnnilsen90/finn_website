const React = require('react');
const reactclass = require('create-react-class');
const css = require('./content-dropdown.css')

var ____Classm=React.Component;for(var ____Classm____Key in ____Classm){if(____Classm.hasOwnProperty(____Classm____Key)){Content[____Classm____Key]=____Classm[____Classm____Key];}}var ____SuperProtoOf____Classm=____Classm===null?null:____Classm.prototype;Content.prototype=Object.create(____SuperProtoOf____Classm);Content.prototype.constructor=Content;Content.__superConstructor__=____Classm;
    
    function Content(props) {"use strict";
    ____Classm.call(this,props);
    this.state = {
            arrow: false,
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
            document.querySelector('.'+this.state.arw).style.display = 'block';
            document.querySelector('.'+this.state.cont_hr).style.display = 'block';
            document.querySelector('.'+this.state.cont_par).style.display = 'none';
            document.querySelector('.'+this.state.arw_click).style.display = 'none';
        } else {
            document.querySelector('.'+this.state.arw).style.display = 'none';
            document.querySelector('.'+this.state.cont_hr).style.display = 'none';
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
        React.createElement("div", {className: "content-dropdown_Container"}, 
            React.createElement("h3", {className: "title"}, this.props.title), 
            React.createElement("div", {className: 'arrow '+this.state.arw, onClick: this.arrow_state}), 
            React.createElement("div", {className: 'arrow_click '+this.state.arw_click, onClick: this.arrow_state}), 
            React.createElement("hr", {className: 'content_hr '+this.state.cont_hr}), 
            React.createElement("div", {className: 'content_parent '+this.state.cont_par}, 
                React.createElement("p", null, this.props.content)
            )
        )
        )
    }});



module.exports = Content;