const React = require('react');
const reactclass = require('create-react-class');
const css = require('./Libcomp.css')

var ____Classb=React.Component;for(var ____Classb____Key in ____Classb){if(____Classb.hasOwnProperty(____Classb____Key)){Libcomp[____Classb____Key]=____Classb[____Classb____Key];}}var ____SuperProtoOf____Classb=____Classb===null?null:____Classb.prototype;Libcomp.prototype=Object.create(____SuperProtoOf____Classb);Libcomp.prototype.constructor=Libcomp;Libcomp.__superConstructor__=____Classb;
    
    function Libcomp(props) {"use strict";
    ____Classb.call(this,props);
    this.state = {
            test: ''
        };

         this.screenSize = this.screenSize.bind(this);
       
    }
     Object.defineProperty(Libcomp.prototype,"screenSize",{writable:true,configurable:true,value:function() {"use strict";
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

    Object.defineProperty(Libcomp.prototype,"componentDidMount",{writable:true,configurable:true,value:function() {"use strict";
        this.screenSize(),
        window.addEventListener('resize', function()  {return this.screenSize();}.bind(this))
    }});
    Object.defineProperty(Libcomp.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";

        return (
        React.createElement("div", {className: "libcomp_Container"}, 
            React.createElement("div", {className: "test"}, this.state.test)
        )
        )
    }});



module.exports = Libcomp;