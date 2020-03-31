const React = require('react');
const reactclass = require('create-react-class');
const css = require('./threecontent-home.css');
let Project_icon = require("../../../../images/project_icon.jpg");

let Button = require('../../../lib/button-one/button-one.js');

var ____Class1=React.Component;for(var ____Class1____Key in ____Class1){if(____Class1.hasOwnProperty(____Class1____Key)){Threecontent[____Class1____Key]=____Class1[____Class1____Key];}}var ____SuperProtoOf____Class1=____Class1===null?null:____Class1.prototype;Threecontent.prototype=Object.create(____SuperProtoOf____Class1);Threecontent.prototype.constructor=Threecontent;Threecontent.__superConstructor__=____Class1;
    
    function Threecontent(props) {"use strict";
    ____Class1.call(this,props);
    this.state = {
            test: ''
        };


       
    }
     

    Object.defineProperty(Threecontent.prototype,"componentDidMount",{writable:true,configurable:true,value:function() {"use strict";
       
    }});
    Object.defineProperty(Threecontent.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";

        return (
        React.createElement("div", {className: 'threecontent-home_Container'+' font'+' font_color'}, 
            React.createElement("h1", {className: "project_header"}, "Projects"), 
            React.createElement("img", {className: "project_icon", src: Project_icon}), 
            React.createElement("ul", {className: "project_list"}, 
                React.createElement("li", null, 
                    React.createElement("a", {className: "project_link", href: "/projects"}, 
                        React.createElement("h3", null, "Hub by Mogo"), 
                        React.createElement("p", null, "Learn about how I managed the inital build and further development of Mogo's automation platform Hub.")
                    )
                ), 
                React.createElement("li", null, 
                    React.createElement("a", {className: "project_link", href: "/projects"}, 
                        React.createElement("h3", null, "Mogo's DMP"), 
                        React.createElement("p", null, "When Mogo onboarded a Data Managment Platform (DMP) I was part of the team that set up the connections and segment taxonomy.")
                    )
                ), 
                React.createElement("li", null, 
                    React.createElement("a", {className: "project_link", href: "/projects"}, 
                        React.createElement("h3", null, "JustAnswer's ChatBot"), 
                        React.createElement("p", null, "When JustAnswer was building out a ChatBot I was the main developer implementing the conversation logic.")
                    )
                ), 
                React.createElement("li", null, 
                    React.createElement("a", {className: "project_link", href: "/projects"}, 
                        React.createElement("h3", null, "Red Bull Youth America's Cup"), 
                        React.createElement("p", null, "I managed a team of sailors aiming to compete in the Red Bull Youth America's Cup.")
                    )
                )
            ), 
            React.createElement(Button, {button_class: "proj_btn_mobile", href: "/project", name: "View Projects"})
        )
        )
    }});



module.exports = Threecontent;