const React = require('react');
const reactclass = require('create-react-class');
const css = require('./outline-projects.css');

const Dropdown = require('../../../lib/content-dropdown/content-dropdown.js');

class Outline extends React.Component {
    
    constructor(props) {
    super(props);
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
    
    content_func(input, test=false) {

        function bullet(arr) {
            let arr_out = []
            for (var i=0;i<arr.length;i++) {
                arr_out.push(<li>{arr[i]}</li>);
            }
            return arr_out
        }

        if(test) {
            return '<div><h4 className="drop_text">'+input.title+'</h4><p className="drop_text">'+input.desc+'</p><ul className="drop_text">'+bullet(input.list)+'</ul></div>'
        } else {
            return <div><h4 className="drop_text">{input.title}</h4><p className="drop_text">{input.desc}</p><ul className="drop_text">{bullet(input.list)}</ul></div>
        }
    }

    componentDidMount() {
       
    }
    render() {

        return (
        <div className={'outline-projects_Container '+'font'}>
            <h1 className='header'>Projects</h1>

            <p className='summary'>
                Throughout my proffesional career I have been involved with a number of projects. Below summarizes some of the key projects I have been apart of.
            </p>
            <div className='projects'>
                <h2 className={'sub_header'}>Hub by Mogo</h2>
                    <p className='proj_summary'>
                        Hub is Mogo's automated platform to traffic creative from clients for digital marketing campaings. As well as allow clients to build and pay for their campaigns through a self service portal.
                    </p>
                    <div className='dropdown'>
                        <Dropdown title={'Roll: Project Manager'} class={'roll_hub'} content={this.content_func(this.state.dropdown.hub.roll)}/>
                        <Dropdown title={'Project Overview'} class={'proj_overview_hub'} content={this.content_func(this.state.dropdown.hub.overview)}/>
                    </div>
                <h2 className={'sub_header'}>Mogo's Salesforce DMP</h2>
                    <p className='proj_summary'>
                        Hub is Mogo's automated platform to traffic creative from clients for digital marketing campaings. As well as allow clients to build and pay for their campaigns through a self service portal.
                    </p>
                    <div className='dropdown'>
                        <Dropdown title={'Roll: Technical Supervisor'} class={'tech_sup'} content={this.content_func(this.state.dropdown.dmp.roll)}/>
                        <Dropdown title={'Project Overview'} class={'proj_overview_dmp'} content={this.content_func(this.state.dropdown.dmp.overview)}/>
                    </div>
                <h2 className={'sub_header'}>JustAnswer's Chatbot Pearl</h2>
                    <p className='proj_summary'>
                        Hub is Mogo's automated platform to traffic creative from clients for digital marketing campaings. As well as allow clients to build and pay for their campaigns through a self service portal.
                    </p>
                    <div className='dropdown'>
                        <Dropdown title={'Roll: Developer'} class={'roll_dev'} content={this.content_func(this.state.dropdown.pearl.roll)}/>
                        <Dropdown title={'Project Overview'} class={'proj_overview_pearl'} content={this.content_func(this.state.dropdown.pearl.overview)}/>
                    </div>
                <h2 className={'sub_header'}>Red Bull Youth America's Cup</h2>
                    <p className='proj_summary'>
                        Hub is Mogo's automated platform to traffic creative from clients for digital marketing campaings. As well as allow clients to build and pay for their campaigns through a self service portal.
                    </p>
                    <div className='dropdown'>
                        <Dropdown title={'Roll: Team Manager'} class={'roll_team_manager'} content={this.content_func(this.state.dropdown.red_bull.roll)}/>
                        <Dropdown title={'Project Overview'} class={'proj_overview_redbull'} content={this.content_func(this.state.dropdown.red_bull.overview)}/>
                    </div>
            </div>
            
        </div>
        )
    }

}

module.exports = Outline;