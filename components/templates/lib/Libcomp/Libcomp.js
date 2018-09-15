const React = require('react');
const reactclass = require('create-react-class');
const css = require('./child.css')

var ____Classd=React.Component;for(var ____Classd____Key in ____Classd){if(____Classd.hasOwnProperty(____Classd____Key)){ChildConst[____Classd____Key]=____Classd[____Classd____Key];}}var ____SuperProtoOf____Classd=____Classd===null?null:____Classd.prototype;ChildConst.prototype=Object.create(____SuperProtoOf____Classd);ChildConst.prototype.constructor=ChildConst;ChildConst.__superConstructor__=____Classd;
    
    function ChildConst(props) {"use strict";
    ____Classd.call(this,props);
    this.state = {
            test: ''
        };

         this.screenSize = this.screenSize.bind(this);
       
    }
     Object.defineProperty(ChildConst.prototype,"screenSize",{writable:true,configurable:true,value:function() {"use strict";
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

    Object.defineProperty(ChildConst.prototype,"componentDidMount",{writable:true,configurable:true,value:function() {"use strict";
        this.screenSize(),
        window.addEventListener('resize', function()  {return this.screenSize();}.bind(this))
    }});
    Object.defineProperty(ChildConst.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";

        return (
        React.createElement("div", {className: "child_Container"}, 
            React.createElement("div", {className: "test"}, this.state.test)
        )
        )
    }});



module.exports = ChildConst;