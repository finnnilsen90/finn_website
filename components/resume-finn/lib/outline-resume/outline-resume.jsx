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

            <p className='summary'>With over 5 years of experience I have been involved in major software projects, digital marketing campaigns, and have manged technical teams.
                As a professional my objective is to continue my understanding of tech through continuous education and upleveling. As well use my foundational understanding
                of business strategy to grow any business I work with.
            </p>

            <div className='work'>
                <h2 className={'mogo '+'sub_header'}>Mogo Interactive</h2>
                    <div className='dropdown'>
                        <Dropdown title={'Associate Director, Media Activation and Technology'} class={'assoc_dir'} content={this.content_func(this.state.dropdown.assoc_dir)}/>
                        <Dropdown title={'Technical Supervisor'} class={'tech_sup'} content={this.content_func(this.state.dropdown.tech_sup)}/>
                        <Dropdown title={'Senior Account Strategist'} class={'senior'} content={this.content_func(this.state.dropdown.senior_account_strat)}/>
                        <Dropdown title={'Account Strategist'} class={'as'} content={this.content_func(this.state.dropdown.account_strat)}/>
                    </div>
                <h2 className={'justanswer '+'sub_header'}>JustAnswer.com</h2>
                <div className='dropdown'>
                        <Dropdown title={'ChatScript Developer'} class={'chat'} content={this.content_func(this.state.dropdown.tech_sup)}/>
                        <Dropdown title={'Marketing Coordinator'} class={'mark_cor'} content={this.content_func(this.state.dropdown.senior_account_strat)}/>
                        <Dropdown title={'Social Media Associate'} class={'social_assoc'} content={this.content_func(this.state.dropdown.account_strat)}/>
                        <Dropdown title={'Social Media Intern'} class={'social_intern'} content={this.content_func(this.state.dropdown.account_strat)}/>
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