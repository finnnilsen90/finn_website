const React = require('react');
const reactclass = require('create-react-class');
const css = require('./button-one.css')

var ____Classa=React.Component;for(var ____Classa____Key in ____Classa){if(____Classa.hasOwnProperty(____Classa____Key)){Button[____Classa____Key]=____Classa[____Classa____Key];}}var ____SuperProtoOf____Classa=____Classa===null?null:____Classa.prototype;Button.prototype=Object.create(____SuperProtoOf____Classa);Button.prototype.constructor=Button;Button.__superConstructor__=____Classa;
    
    function Button(props) {"use strict";
    ____Classa.call(this,props);
    this.state = {
            height: null
        };

       this.dimension = this.dimension.bind(this)
    }

    Object.defineProperty(Button.prototype,"dimension",{writable:true,configurable:true,value:function() {"use strict";
        let width_prop = this.props.width;
        let font_size = this.props.font_size;

        if (width_prop!==undefined) {

            let width_num = parseInt(width_prop.slice(0));
            let height_num = width_num*.43;
            let height_prop = String(height_num)+'px'

            this.setState({height: height_prop})
    
            document.querySelector('.'+this.props.button_class).style.width = width_prop;
            document.querySelector('.'+this.props.button_class).style.height = height_prop;
            document.querySelector('.'+this.props.button_class).style.fontSize = font_size;

        }

    }});

    Object.defineProperty(Button.prototype,"componentWillMount",{writable:true,configurable:true,value:function() {"use strict";
        
    }});

    Object.defineProperty(Button.prototype,"componentDidMount",{writable:true,configurable:true,value:function() {"use strict";
       
        
        setTimeout(function()  {
            this.dimension()
        }.bind(this), 10)
        
    }});
    Object.defineProperty(Button.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";

        return (
        React.createElement("div", {className: "button-one_Container"}, 
            React.createElement("button", {className: 'button_style_one '+this.props.button_class, href: this.props.href, type: this.props.type, value: this.props.value}, this.props.name)
        )
        )
    }});



module.exports = Button;