const React = require('react');
const reactclass = require('create-react-class');
const css = require('./outline-projects.css');

const Dropdown = require('../../../lib/content-dropdown/content-dropdown.js');

var ____Class4=React.Component;for(var ____Class4____Key in ____Class4){if(____Class4.hasOwnProperty(____Class4____Key)){Outline[____Class4____Key]=____Class4[____Class4____Key];}}var ____SuperProtoOf____Class4=____Class4===null?null:____Class4.prototype;Outline.prototype=Object.create(____SuperProtoOf____Class4);Outline.prototype.constructor=Outline;Outline.__superConstructor__=____Class4;
    
    function Outline(props) {"use strict";
    ____Class4.call(this,props);
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
                    roll: {
                        title: "Roll Description",
                        desc: "As an Associate Director I was in charge of the technical product offering Mogo. Managing software projects and different packaged offerings for our clients. I also managed a team of 4 account managers on the media acctivation side.",
                        list: ["Technical Product Managment",
                            "Managed a team of 4",
                            "Campaign managment for tier 1 and enterprize clients",
                        ]
                    },
                    overview: {
                        desc: "As an Associate Director I was in charge of the technical product offering Mogo. Managing software projects and different packaged offerings for our clients. I also managed a team of 4 account managers on the media acctivation side.",
                        list: ["Technical Product Managment",
                            "Managed a team of 4",
                            "Campaign managment for tier 1 and enterprize clients",
                        ]
                    }
                },
                dmp: {
                    roll: {
                        title: "Roll Description",
                        desc: "As an Associate Director I was in charge of the technical product offering Mogo. Managing software projects and different packaged offerings for our clients. I also managed a team of 4 account managers on the media acctivation side.",
                        list: ["Technical Product Managment",
                            "Managed a team of 4",
                            "Campaign managment for tier 1 and enterprize clients",
                        ]
                    },
                    overview: {
                        desc: "As an Associate Director I was in charge of the technical product offering Mogo. Managing software projects and different packaged offerings for our clients. I also managed a team of 4 account managers on the media acctivation side.",
                        list: ["Technical Product Managment",
                            "Managed a team of 4",
                            "Campaign managment for tier 1 and enterprize clients",
                        ]
                    }
                },
                pearl: {
                    roll: {
                        title: "Roll Description",
                        desc: "As an Associate Director I was in charge of the technical product offering Mogo. Managing software projects and different packaged offerings for our clients. I also managed a team of 4 account managers on the media acctivation side.",
                        list: ["Technical Product Managment",
                            "Managed a team of 4",
                            "Campaign managment for tier 1 and enterprize clients",
                        ]
                    },
                    overview: {
                        desc: "As an Associate Director I was in charge of the technical product offering Mogo. Managing software projects and different packaged offerings for our clients. I also managed a team of 4 account managers on the media acctivation side.",
                        list: ["Technical Product Managment",
                            "Managed a team of 4",
                            "Campaign managment for tier 1 and enterprize clients",
                        ]
                    }
                },
                red_bull: {
                    roll: {
                        title: "Roll Description",
                        desc: "As an Associate Director I was in charge of the technical product offering Mogo. Managing software projects and different packaged offerings for our clients. I also managed a team of 4 account managers on the media acctivation side.",
                        list: ["Technical Product Managment",
                            "Managed a team of 4",
                            "Campaign managment for tier 1 and enterprize clients",
                        ]
                    },
                    overview: {
                        desc: "As an Associate Director I was in charge of the technical product offering Mogo. Managing software projects and different packaged offerings for our clients. I also managed a team of 4 account managers on the media acctivation side.",
                        list: ["Technical Product Managment",
                            "Managed a team of 4",
                            "Campaign managment for tier 1 and enterprize clients",
                        ]
                    }
                }
            }
        };

        this.content_func = this.content_func.bind(this);
       
    }
    
    Object.defineProperty(Outline.prototype,"content_func",{writable:true,configurable:true,value:function(input, test) {"use strict";

        function bullet(arr) {
            let arr_out = []
            for (var i=0;i<arr.length;i++) {
                arr_out.push(React.createElement("li", null, arr[i]));
            }
            return arr_out
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
                        "Hub is Mogo's automated platform to traffic creative from clients for digital marketing campaings. As well as allow clients to build and pay for their campaigns through a self service portal."
                    ), 
                    React.createElement("div", {className: "dropdown"}, 
                        React.createElement(Dropdown, {title: 'Roll: Project Manager', class: 'roll_hub', content: this.content_func(this.state.dropdown.hub.roll)}), 
                        React.createElement(Dropdown, {title: 'Project Overview', class: 'proj_overview_hub', content: this.content_func(this.state.dropdown.hub.overview)})
                    ), 
                React.createElement("h2", {className: 'sub_header'}, "Mogo's Salesforce DMP"), 
                    React.createElement("p", {className: "proj_summary"}, 
                        "Hub is Mogo's automated platform to traffic creative from clients for digital marketing campaings. As well as allow clients to build and pay for their campaigns through a self service portal."
                    ), 
                    React.createElement("div", {className: "dropdown"}, 
                        React.createElement(Dropdown, {title: 'Roll: Technical Supervisor', class: 'tech_sup', content: this.content_func(this.state.dropdown.dmp.roll)}), 
                        React.createElement(Dropdown, {title: 'Project Overview', class: 'proj_overview_dmp', content: this.content_func(this.state.dropdown.dmp.overview)})
                    ), 
                React.createElement("h2", {className: 'sub_header'}, "JustAnswer's Chatbot Pearl"), 
                    React.createElement("p", {className: "proj_summary"}, 
                        "Hub is Mogo's automated platform to traffic creative from clients for digital marketing campaings. As well as allow clients to build and pay for their campaigns through a self service portal."
                    ), 
                    React.createElement("div", {className: "dropdown"}, 
                        React.createElement(Dropdown, {title: 'Roll: Developer', class: 'roll_dev', content: this.content_func(this.state.dropdown.pearl.roll)}), 
                        React.createElement(Dropdown, {title: 'Project Overview', class: 'proj_overview_pearl', content: this.content_func(this.state.dropdown.pearl.overview)})
                    ), 
                React.createElement("h2", {className: 'sub_header'}, "Red Bull Youth America's Cup"), 
                    React.createElement("p", {className: "proj_summary"}, 
                        "Hub is Mogo's automated platform to traffic creative from clients for digital marketing campaings. As well as allow clients to build and pay for their campaigns through a self service portal."
                    ), 
                    React.createElement("div", {className: "dropdown"}, 
                        React.createElement(Dropdown, {title: 'Roll: Team Manager', class: 'roll_team_manager', content: this.content_func(this.state.dropdown.red_bull.roll)}), 
                        React.createElement(Dropdown, {title: 'Project Overview', class: 'proj_overview_redbull', content: this.content_func(this.state.dropdown.red_bull.overview)})
                    )
            )
            
        )
        )
    }});



module.exports = Outline;