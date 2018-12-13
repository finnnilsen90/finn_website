const React = require('react');
const reactclass = require('create-react-class');
const css = require('./form-create_usr.css')

var ____Classd=React.Component;for(var ____Classd____Key in ____Classd){if(____Classd.hasOwnProperty(____Classd____Key)){Form[____Classd____Key]=____Classd[____Classd____Key];}}var ____SuperProtoOf____Classd=____Classd===null?null:____Classd.prototype;Form.prototype=Object.create(____SuperProtoOf____Classd);Form.prototype.constructor=Form;Form.__superConstructor__=____Classd;
    
    function Form(props) {"use strict";
    ____Classd.call(this,props);
    this.state = {
            test: ''
        };

         this.screenSize = this.screenSize.bind(this);
       
    }
     Object.defineProperty(Form.prototype,"screenSize",{writable:true,configurable:true,value:function() {"use strict";
        let screenWidth = window.innerWidth
        function respond() {
            if (screenWidth > 800) {
                return 'desktop';
            }
            if (screenWidth <= 800 && 500 < screenWidth) {
                return 'desktop small';
            }
            if (screenWidth <= 500){
                return 'mobile';
            }
            else {
                return 'screen size error';
            }
        }

        this.setState(function(chng)  {return {
            test: respond()
        };});
    }});; 

    Object.defineProperty(Form.prototype,"componentDidMount",{writable:true,configurable:true,value:function() {"use strict";
        this.screenSize(),
        window.addEventListener('resize', function()  {return this.screenSize();}.bind(this))
    }});
    Object.defineProperty(Form.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";

        return (
        React.createElement("div", {className: "form-create_usr_Container"}, 
            React.createElement("div", {className: "test"}, this.state.test)
        )
        )
    }});



module.exports = Form;