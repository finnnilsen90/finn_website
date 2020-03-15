const React = require('react');
const reactclass = require('create-react-class');
const css = require('./outline-resume.css')

const Dropdown = require('../../../lib/content-dropdown/content-dropdown.js');

class Outline extends React.Component {
    
    constructor(props) {
    super(props);
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
                    title: "ChatScript Developer",
                    desc: "My role on the chatbot team has been to develop code for the Pearl chatbot, and help outline the overall customer interaction with Pearl by working with copywriters.",
                    list: ["Develop ChatScript for Pearl (ChatScript is the coding language used to dictate how Pearl linguistically interacts with customers).",
                            "Manually train machine learning algorithms that dictate how Pearl interacts with customers.",
                            "Produce analytics reports on how our chat bot is interacting with customers.",
                            "Organize the QA process for Pearl and work with automated QA software for Pearl.",
                            "Organize and coordinate the development process for Pearl, starting from copy and moving all the way to QA to produce a winning test."
                    ]
                },
                marketing_coordinator: {
                    title: "Marketing Coordinator",
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
                    title: "Social Media Associate",
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
    
    content_func(input,test=false) {

        function bullet(arr) {
            let arr_out = []
            for (var i=0;i<arr.length;i++) {
                arr_out.push(<li>{arr[i]}</li>);
            }
            return arr_out
        }

        if (test) {
            return '<div><h4 className="drop_text">'+input.title+'</h4><p className="drop_text">'+input.desc+'</p><ul className="drop_text">'+bullet(input.list)+'</ul></div>'
        } else {
            return <div><h4 className="drop_text">{input.title}</h4><p className="drop_text">{input.desc}</p><ul className="drop_text">{bullet(input.list)}</ul></div>
        }
                
    }

    componentDidMount() {
        
    }
    render() {

        return (
        <div className={'outline-resume_Container '+'font'}>

            <h1 className='header'>Resume</h1>

            <p className='summary'>With over 5 years of experience I have been involved in major software projects, digital marketing campaigns, and have managed technical teams. 
            As a professional, my objective is to continue my understanding of tech through continuous education and upleveling. 
            As well as  use my foundational understanding of business strategy to grow any business I work with.
            </p>

            <div className='work'>
                <h2 className={'mogo '+'sub_header'}>Mogo Interactive</h2>
                    <div className='dropdown'>
                        <Dropdown title={'Associate Director, Media Activation and Technology'} class={'assoc_dir'} content={this.content_func(this.state.dropdown.assoc_dir)}/>
                        <Dropdown title={'Technical Supervisor'} class={'tech_sup'} content={this.content_func(this.state.dropdown.tech_sup)}/>
                        <Dropdown title={'Senior Account Strategist'} class={'senior'} content={this.content_func(this.state.dropdown.senior_account_strat)}/>
                    </div>
                <h2 className={'justanswer '+'sub_header'}>JustAnswer.com</h2>
                <div className='dropdown'>
                        <Dropdown title={'ChatScript Developer'} class={'chat'} content={this.content_func(this.state.dropdown.chatscript_dev)}/>
                        <Dropdown title={'Marketing Coordinator'} class={'mark_cor'} content={this.content_func(this.state.dropdown.marketing_coordinator)}/>
                        <Dropdown title={'Social Media Associate'} class={'social_assoc'} content={this.content_func(this.state.dropdown.socialmedia_assoc)}/>
                    </div>
            </div>
            <div className='summary'>
                <h3>Skills</h3>
                <p>
                    Python, Jupyter, MySQL React, Node.JS, DV360, Camapgin Manager, The Trade Desk, Google Analytics, Google Tag Manager
                </p>
            </div>
           
        </div>
        )
    }

}

module.exports = Outline;