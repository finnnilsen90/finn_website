const React = require('react');
const reactclass = require('create-react-class');
const css = require('./outline-resume.css')

const Dropdown = require('../../../lib/content-dropdown/content-dropdown.js');

var ____Class0=React.Component;for(var ____Class0____Key in ____Class0){if(____Class0.hasOwnProperty(____Class0____Key)){Outline[____Class0____Key]=____Class0[____Class0____Key];}}var ____SuperProtoOf____Class0=____Class0===null?null:____Class0.prototype;Outline.prototype=Object.create(____SuperProtoOf____Class0);Outline.prototype.constructor=Outline;Outline.__superConstructor__=____Class0;
    
    function Outline(props) {"use strict";
    ____Class0.call(this,props);
    this.state = {
            dropdown: {
                assoc_dir: {
                    title: "Job Description",
                    desc: "Lead a team of media activation managers and supervisors to achieve team goals and retain clients.",
                    list: ["Manage top tier clients digital marketing campaigns. Clients such as SF Ballet and Alibaba.",
                        "Create advanced automated reporting dashboards.",
                        "Project Manage software projects.",
                        "Host webinars.",
                        "Implement advanced tracking."
                    ]
                },
                tech_sup: {
                    title: "Job Description",
                    desc: "Supervise a team of account strategists to ensure they are at a certain level of technical proficiency. At the same work on top client accounts on the back end to achieve client goals.",
                    list: ["Manage top tier clients digital marketing campaigns.",
                        "Project manage major projects.",
                        "Implement advanced tracking.",
                    ]
                },
                senior_account_strat: {
                    title: "Job Description",
                    desc: "Manage client’s digital marketing campaigns and oversee internal process.",
                    list: ["Manage digital marketing campaigns.", 
                        "Implement and manage tracking.",
                        "Conduct in depth analysis."
                    ]
                },
                chatscript_dev: {
                    title: "Job Description",
                    desc: "My role on the chatbot team has been to develop code for the Pearl chatbot, and help outline the overall customer interaction with Pearl by working with copywriters.",
                    list: ["Develop ChatScript for Pearl (ChatScript is the coding language used to dictate how Pearl linguistically interacts with customers).",
                            "Manually train machine learning algorithms that dictate how Pearl interacts with customers.",
                            "Produce analytics reports on how our chat bot is interacting with customers.",
                            "Organize the QA process for Pearl and work with automated QA software for Pearl.",
                            "Organize and coordinate the development process for Pearl, starting from copy and moving all the way to QA to produce a winning test."
                    ]
                },
                marketing_coordinator: {
                    title: "Job Description",
                    desc: "JustAnswer has been A/B testing various parts of the site to perfect the product and drive GSS, after years of doing so with lean methodology JustAnswer is looking to start marketing. My role has been to facilitate that effort by talking to various teams, organizing initiatives, and doing other various activities such as data analysis.",
                    list: ["Develop ChatScript for Pearl (ChatScript is the coding language used to dictate how Pearl linguistically interacts with customers).",
                            "Assist in data analysis.",
                            "Assist in organizing A/B testing.",
                            "Organize and run SEO reputation management.",
                            "Develop open graph for various web pages.",
                            "Manage social media.",
                            "Communicate with UX and Engineering."
                    ]
                },
                socialmedia_assoc: {
                    title: "Job Description",
                    desc: "With this position I was mainly involved in running various campaigns, organizing content creation, and performing data analysis. ",
                    list: ["Ran Facebook ads to achieve an optimal ROAS.",
                            "Managed social channels.",
                            "Managed boosting of Facebook content.",
                            "Data analysis of traffic and engagement."
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

            React.createElement("p", {className: "summary"}, "With over 5 years of experience I have been involved in major software projects, digital marketing campaigns, and have managed technical teams." + ' ' + 
            "As a professional, my objective is to continue my understanding of tech through continuous education and upleveling." + ' ' + 
            "As well as  use my foundational understanding of business strategy to grow any business I work with."
            ), 

            React.createElement("div", {className: "work"}, 
                React.createElement("h2", {className: 'mogo '+'sub_header'}, "Mogo Interactive"), 
                    React.createElement("div", {className: "dropdown"}, 
                        React.createElement(Dropdown, {title: 'Associate Director, Media Activation and Technology', class: 'assoc_dir', content: this.content_func(this.state.dropdown.assoc_dir)}), 
                        React.createElement(Dropdown, {title: 'Technical Supervisor', class: 'tech_sup', content: this.content_func(this.state.dropdown.tech_sup)}), 
                        React.createElement(Dropdown, {title: 'Senior Account Strategist', class: 'senior', content: this.content_func(this.state.dropdown.senior_account_strat)})
                    ), 
                React.createElement("h2", {className: 'justanswer '+'sub_header'}, "JustAnswer.com"), 
                React.createElement("div", {className: "dropdown"}, 
                        React.createElement(Dropdown, {title: 'ChatScript Developer', class: 'chat', content: this.content_func(this.state.dropdown.chatscript_dev)}), 
                        React.createElement(Dropdown, {title: 'Marketing Coordinator', class: 'mark_cor', content: this.content_func(this.state.dropdown.marketing_coordinator)}), 
                        React.createElement(Dropdown, {title: 'Social Media Associate', class: 'social_assoc', content: this.content_func(this.state.dropdown.socialmedia_assoc)})
                    )
            ), 
            React.createElement("div", {className: "summary"}, 
                React.createElement("h3", null, "Skills"), 
                React.createElement("p", null, 
                    "Python, Jupyter, MySQL React, Node.JS, DV360, Camapgin Manager, The Trade Desk, Google Analytics, Google Tag Manager"
                )
            )
           
        )
        )
    }});



module.exports = Outline;