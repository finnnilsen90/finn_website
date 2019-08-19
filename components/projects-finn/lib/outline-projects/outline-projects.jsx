const React = require('react');
const reactclass = require('create-react-class');
const css = require('./outline-projects.css');

const Dropdown = require('../../../lib/content-dropdown/content-dropdown.js');

class Outline extends React.Component {
    
    constructor(props) {
    super(props);
    this.state = {
            test: ''
        };


       
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
                        <Dropdown title={'Roll: Project Manager'} class={'roll_hub'} content={'Test'}/>
                        <Dropdown title={'Project Overview'} class={'proj_overview_hub'} content={'Test'}/>
                    </div>
                <h2 className={'sub_header'}>Mogo's Salesforce DMP</h2>
                    <p className='proj_summary'>
                        Hub is Mogo's automated platform to traffic creative from clients for digital marketing campaings. As well as allow clients to build and pay for their campaigns through a self service portal.
                    </p>
                    <div className='dropdown'>
                        <Dropdown title={'Roll: Technical Supervisor'} class={'tech_sup'} content={'Test'}/>
                        <Dropdown title={'Project Overview'} class={'proj_overview_dmp'} content={'Test'}/>
                    </div>
                <h2 className={'sub_header'}>JustAnswer's Chatbot Pearl</h2>
                    <p className='proj_summary'>
                        Hub is Mogo's automated platform to traffic creative from clients for digital marketing campaings. As well as allow clients to build and pay for their campaigns through a self service portal.
                    </p>
                    <div className='dropdown'>
                        <Dropdown title={'Roll: developer'} class={'roll_dev'} content={'Test'}/>
                        <Dropdown title={'Project Overview'} class={'proj_overview_pearl'} content={'Test'}/>
                    </div>
                <h2 className={'sub_header'}>Red Bull Youth America's Cup</h2>
                    <p className='proj_summary'>
                        Hub is Mogo's automated platform to traffic creative from clients for digital marketing campaings. As well as allow clients to build and pay for their campaigns through a self service portal.
                    </p>
                    <div className='dropdown'>
                        <Dropdown title={'Roll: Team Manager'} class={'roll_team_manager'} content={'Test'}/>
                        <Dropdown title={'Project Overview'} class={'proj_overview_redbull'} content={'Test'}/>
                    </div>
            </div>
            
        </div>
        )
    }

}

module.exports = Outline;