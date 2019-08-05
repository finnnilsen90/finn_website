const React = require('react');
const reactclass = require('create-react-class');
const css = require('./outline-resume.css')

const Dropdown = require('../../../lib/content-dropdown/content-dropdown.js');

var ____Classy=React.Component;for(var ____Classy____Key in ____Classy){if(____Classy.hasOwnProperty(____Classy____Key)){Outline[____Classy____Key]=____Classy[____Classy____Key];}}var ____SuperProtoOf____Classy=____Classy===null?null:____Classy.prototype;Outline.prototype=Object.create(____SuperProtoOf____Classy);Outline.prototype.constructor=Outline;Outline.__superConstructor__=____Classy;
    
    function Outline(props) {"use strict";
    ____Classy.call(this,props);
    this.state = {
            dropdown: {
                assoc_dir: {
                    title: "Job Description",
                    desc: "As an Associate Director I was in charge of the technical product offering Mogo. Managing software projects and different packaged offerings for our clients. I also managed a team of 4 account managers on the media acctivation side.",
                    list: ["Technical Product Managment",
                        "Managed a team of 4",
                        "Campaign managment for tier 1 and enterprize clients",
                    ]
                },
                tech_sup: {
                    title: "Job Description",
                    desc: "As a Technical Supervisor I was a member of the technical team and was responsible for the technical growth of Mogo employees and oversaw many tier 1 accounts on the back end.",
                    list: ["Assisted with the DMP",
                        "Project Managment of our brand new automation platform Hub",
                        "Campaign managment for tier 1 clients",
                    ]
                },
                senior_account_strat: {
                    title: "Job Description",
                    desc: "As a Senior Account Strategist I had some elivated responsibilities on top of normal Account Strategist areas of focus.",
                    list: ["Outline digital strategy", 
                        "Process managment",
                        "Tier 1 client campaigns",
                        "Project managment"
                    ]
                },
                account_strat: {
                    title: "Job Description",
                    desc: "Account Strategist's are in charge of analyzing, building, and optimizing digital campaigns.",
                    list: ["Outline digital strategy", 
                        "A/B Testing",
                        "Perform campaign analysis",
                        "Implement tag tracking"
                    ]
                }
            }
        };

        this.content_func = this.content_func.bind(this);
       
    }
    
    Object.defineProperty(Outline.prototype,"content_func",{writable:true,configurable:true,value:function(input,test) {"use strict";

        function bullet(arr) {
            let arr_out = []
            for (var i=0;i<arr.length;i++) {
                arr_out.push(React.createElement("li", null, arr[i]));
            }
            return arr_out
        }

        if (test) {
            return '<div><h4 className="drop_text">'+input.title+'</h4><p className="drop_text">'+input.desc+'</p><ul className="drop_text">'+bullet(input.list)+'</ul></div>'
        } else {
            return React.createElement("div", null, React.createElement("h4", {className: "drop_text"}, input.title), React.createElement("p", {className: "drop_text"}, input.desc), React.createElement("ul", {className: "drop_text"}, bullet(input.list)))
        }
                
    }});

    Object.defineProperty(Outline.prototype,"componentDidMount",{writable:true,configurable:true,value:function() {"use strict";
        
    }});
    Object.defineProperty(Outline.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";

        return (
        React.createElement("div", {className: 'outline-resume_Container '+'font'}, 

            React.createElement("h1", {className: "header"}, "Resume"), 

            React.createElement("div", {className: "work"}, 
                React.createElement("h2", {className: 'mogo '+'sub_header'}, "Mogo Interactive"), 
                    React.createElement("div", {className: "dropdown"}, 
                        React.createElement(Dropdown, {title: 'Associate Director, Media Activation and Technology', class: 'senior', content: this.content_func(this.state.dropdown.assoc_dir)}), 
                        React.createElement(Dropdown, {title: 'Technical Supervisor', class: 'tech_sup', content: this.content_func(this.state.dropdown.tech_sup)}), 
                        React.createElement(Dropdown, {title: 'Senior Account Strategist', class: 'senior', content: this.content_func(this.state.dropdown.senior_account_strat)}), 
                        React.createElement(Dropdown, {title: 'Account Strategist', class: 'as', content: this.content_func(this.state.dropdown.account_strat)})
                    ), 
                React.createElement("h2", {className: 'justanswer '+'sub_header'}, "JustAnswer.com"), 
                React.createElement("div", {className: "dropdown"}, 
                        React.createElement(Dropdown, {title: 'ChatScript Developer', class: 'chat', content: this.content_func(this.state.dropdown.tech_sup)}), 
                        React.createElement(Dropdown, {title: 'Marketing Coordinator', class: 'mark_cor', content: this.content_func(this.state.dropdown.senior_account_strat)}), 
                        React.createElement(Dropdown, {title: 'Social Media Associate', class: 'social_assoc', content: this.content_func(this.state.dropdown.account_strat)}), 
                        React.createElement(Dropdown, {title: 'Social Media Intern', class: 'social_assoc', content: this.content_func(this.state.dropdown.account_strat)})
                    )
            )
           
        )
        )
    }});



module.exports = Outline;