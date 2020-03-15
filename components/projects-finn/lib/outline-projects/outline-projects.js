const React = require('react');
const reactclass = require('create-react-class');
const css = require('./outline-projects.css');

const Dropdown = require('../../../lib/content-dropdown/content-dropdown.js');

var ____Class3=React.Component;for(var ____Class3____Key in ____Class3){if(____Class3.hasOwnProperty(____Class3____Key)){Outline[____Class3____Key]=____Class3[____Class3____Key];}}var ____SuperProtoOf____Class3=____Class3===null?null:____Class3.prototype;Outline.prototype=Object.create(____SuperProtoOf____Class3);Outline.prototype.constructor=Outline;Outline.__superConstructor__=____Class3;
    
    function Outline(props) {"use strict";
    ____Class3.call(this,props);
    this.state = {
            dropdown: {
                test: {
                    title: "Job Description",
                    desc: "As an Associate Director I was in charge of the technical product offering Mogo. Managing software projects and different packaged offerings for our clients. I also managed a team of 4 account managers on the media acctivation side.",
                    list: ["Technical Product Managment",
                        "Managed a team of 4",
                        "Campaign managment for tier 1 and enterprize clients",
                    ]
                },
                hub: {
                    role: {
                        desc: "I was a project manager and was responsible for communicating business requirements to the engineering team. Ensuring the project stayed within scope, timeline, and budget. I was also heavily involved with various product discussions and decisions to ensure the platform met the needs of our clients."
                    },
                    overview: {
                        desc: "The initial build lasted over a year from its conception and required a strategic approach in order to meet the business goals of the project. The main business goal of the project was to establish a fully automated workflow for our lower budget clients, reducing the need for human touch points. At the same time we were also automating parts of the workflow for our higher budget clients through Hub. The platform was officially launched on February 2019 and resulted in over a million dollars going through the fully automated portion of the platform via credit card payment in its first year. "
                    }
                },
                dmp: {
                    role: {
                        desc: "I was a Technical Supervisor on the project which meant I was involved with building the taxonomy and organization of data within the DMP. I was also heavily involved with various product decisions around monetizing the DMP. One of the ways we monetized the use of the DMP was by providing advanced reporting for our clients."
                    },
                    overview: {
                        desc: "The project started with understanding the DMP through various workshops and short project sprints. The first goal out the gate was to organize the foundational elements of the DMP to better set ourselves up to work through vast quantities of data."
                    }
                },
                pearl: {
                    role: {
                        desc: "My role on the Pearl team has been to develop code for the Pearl chatbot, and help outline the overall customer interaction with Pearl by working with copywriters. I have both a marketing and technical background which made me the perfect fit for a role that involves understanding user behavior from a data driven perspective, and understanding how a computer program works; so I could best match that user behavior to a chatbot."
                    },
                    overview: {
                        desc: "The initial goal of the ChatBot was to act as an assistant on the JustAnswer platform. The ChatBot was programmed to interact with the customer and gather high level information to then pass onto an online expert who would eventually answer the question the customer had. To add further clarity to JustAnswer’s business model. JustAnswer is a platform that allows people to converse with certified online experts."
                    }
                },
                red_bull: {
                    role: {
                        desc: "I was the team lead on land on the water I was racing tactician. My responsibilities on land involved PR, project financing, and sponsorship communication."
                    },
                    overview: {
                        desc: "The Red Bull Youth America’s Cup is a major sailing event hosted by the organizing authority of the America’s Cup. It involves sailing teams of youth sailors racing highly advanced racing yachts against one another. Each team needs to organize themselves financially by acquiring sponsorship deals in order to compete. Along with proving themselves to be capable sailors in order to be accepted into the event."
                    }
                }
            }
        };

        this.content_func = this.content_func.bind(this);
       
    }
    
    Object.defineProperty(Outline.prototype,"content_func",{writable:true,configurable:true,value:function(input, test) {"use strict";

        function bullet(arr) {
            let arr_out = []
            if (arr !== undefined) {
                for (var i=0;i<arr.length;i++) {
                    arr_out.push(React.createElement("li", null, arr[i]));
                }
                return arr_out
            }
        }

        if(test) {
            return '<div><h4 className="drop_text">'+input.title+'</h4><p className="drop_text">'+input.desc+'</p><ul className="drop_text">'+bullet(input.list)+'</ul></div>'
        } else {
            return React.createElement("div", null, React.createElement("h4", {className: "drop_text"}, input.title), React.createElement("p", {className: "drop_text"}, input.desc), React.createElement("ul", {className: "drop_text"}, bullet(input.list)))
        }
    }});

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
                        "Hub is Mogo’s in-house automated ad trafficking platform. It allows clients to upload assets to an easy to use interface and Hub automatically trafficks those assets to be activated in a digital marketing campaign across multiple channels." 
                    ), 
                    React.createElement("div", {className: "dropdown"}, 
                        React.createElement(Dropdown, {title: 'Role: Project Manager', class: 'Role_hub', content: this.content_func(this.state.dropdown.hub.role)}), 
                        React.createElement(Dropdown, {title: 'Project Overview', class: 'proj_overview_hub', content: this.content_func(this.state.dropdown.hub.overview)})
                    ), 
                React.createElement("h2", {className: 'sub_header'}, "Mogo's Salesforce DMP"), 
                    React.createElement("p", {className: "proj_summary"}, 
                        "Mogo established a Salesforce Krux DMP to better scale and utilize its first party data from a reporting and activation standpoint." 
                    ), 
                    React.createElement("div", {className: "dropdown"}, 
                        React.createElement(Dropdown, {title: 'Role: Technical Supervisor', class: 'tech_sup', content: this.content_func(this.state.dropdown.dmp.role)}), 
                        React.createElement(Dropdown, {title: 'Project Overview', class: 'proj_overview_dmp', content: this.content_func(this.state.dropdown.dmp.overview)})
                    ), 
                React.createElement("h2", {className: 'sub_header'}, "JustAnswer's Chatbot Pearl"), 
                    React.createElement("p", {className: "proj_summary"}, 
                        "JustAnswer's chatbot Pearl has been developed to increase sales through the SEO funnel and in doing so; diversify JustAnswer's revenue." 
                    ), 
                    React.createElement("div", {className: "dropdown"}, 
                        React.createElement(Dropdown, {title: 'Role: Developer', class: 'Role_dev', content: this.content_func(this.state.dropdown.pearl.role)}), 
                        React.createElement(Dropdown, {title: 'Project Overview', class: 'proj_overview_pearl', content: this.content_func(this.state.dropdown.pearl.overview)})
                    ), 
                React.createElement("h2", {className: 'sub_header'}, "Red Bull Youth America's Cup"), 
                    React.createElement("p", {className: "proj_summary"}, 
                        "The Red Bull Youth America’s Cup (RBYAC) is a sailing event put on by Red Bull and the America’s Cup Event Authority (ACEA) for young sailors to compete in wing sailed 45-foot America’s Cup catamarans (AC 45)."
                    ), 
                    React.createElement("div", {className: "dropdown"}, 
                        React.createElement(Dropdown, {title: 'Role: Team Manager', class: 'Role_team_manager', content: this.content_func(this.state.dropdown.red_bull.role)}), 
                        React.createElement(Dropdown, {title: 'Project Overview', class: 'proj_overview_redbull', content: this.content_func(this.state.dropdown.red_bull.overview)})
                    )
            )
            
        )
        )
    }});



module.exports = Outline;