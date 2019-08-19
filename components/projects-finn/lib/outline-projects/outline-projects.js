const React = require('react');
const reactclass = require('create-react-class');
const css = require('./outline-projects.css');

const Dropdown = require('../../../lib/content-dropdown/content-dropdown.js');

var ____Classk=React.Component;for(var ____Classk____Key in ____Classk){if(____Classk.hasOwnProperty(____Classk____Key)){Outline[____Classk____Key]=____Classk[____Classk____Key];}}var ____SuperProtoOf____Classk=____Classk===null?null:____Classk.prototype;Outline.prototype=Object.create(____SuperProtoOf____Classk);Outline.prototype.constructor=Outline;Outline.__superConstructor__=____Classk;
    
    function Outline(props) {"use strict";
    ____Classk.call(this,props);
    this.state = {
            test: ''
        };


       
    }
     

    Object.defineProperty(Outline.prototype,"componentDidMount",{writable:true,configurable:true,value:function() {"use strict";
       
    }});
    Object.defineProperty(Outline.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";

        return (
        React.createElement("div", {className: 'outline-projects_Container '+'font'}, 
            React.createElement("h1", {className: "header"}, "Projects"), 

            React.createElement("p", {className: "summary"}, 
                "Throughout my proffesional career I have been involved with a number of projects. Below summarizes some of the key projects I have been apart of."
            ), 
            React.createElement("div", {className: "projects"}, 
                React.createElement("h2", {className: 'sub_header'}, "Hub by Mogo"), 
                    React.createElement("p", {className: "proj_summary"}, 
                        "Hub is Mogo's automated platform to traffic creative from clients for digital marketing campaings. As well as allow clients to build and pay for their campaigns through a self service portal."
                    ), 
                    React.createElement("div", {className: "dropdown"}, 
                        React.createElement(Dropdown, {title: 'Roll: Project Manager', class: 'roll_hub', content: 'Test'}), 
                        React.createElement(Dropdown, {title: 'Project Overview', class: 'proj_overview_hub', content: 'Test'})
                    ), 
                React.createElement("h2", {className: 'sub_header'}, "Mogo's Salesforce DMP"), 
                    React.createElement("p", {className: "proj_summary"}, 
                        "Hub is Mogo's automated platform to traffic creative from clients for digital marketing campaings. As well as allow clients to build and pay for their campaigns through a self service portal."
                    ), 
                    React.createElement("div", {className: "dropdown"}, 
                        React.createElement(Dropdown, {title: 'Roll: Technical Supervisor', class: 'tech_sup', content: 'Test'}), 
                        React.createElement(Dropdown, {title: 'Project Overview', class: 'proj_overview_dmp', content: 'Test'})
                    ), 
                React.createElement("h2", {className: 'sub_header'}, "JustAnswer's Chatbot Pearl"), 
                    React.createElement("p", {className: "proj_summary"}, 
                        "Hub is Mogo's automated platform to traffic creative from clients for digital marketing campaings. As well as allow clients to build and pay for their campaigns through a self service portal."
                    ), 
                    React.createElement("div", {className: "dropdown"}, 
                        React.createElement(Dropdown, {title: 'Roll: developer', class: 'roll_dev', content: 'Test'}), 
                        React.createElement(Dropdown, {title: 'Project Overview', class: 'proj_overview_pearl', content: 'Test'})
                    ), 
                React.createElement("h2", {className: 'sub_header'}, "Red Bull Youth America's Cup"), 
                    React.createElement("p", {className: "proj_summary"}, 
                        "Hub is Mogo's automated platform to traffic creative from clients for digital marketing campaings. As well as allow clients to build and pay for their campaigns through a self service portal."
                    ), 
                    React.createElement("div", {className: "dropdown"}, 
                        React.createElement(Dropdown, {title: 'Roll: Team Manager', class: 'roll_team_manager', content: 'Test'}), 
                        React.createElement(Dropdown, {title: 'Project Overview', class: 'proj_overview_redbull', content: 'Test'})
                    )
            )
            
        )
        )
    }});



module.exports = Outline;