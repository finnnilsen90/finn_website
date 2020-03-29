const React = require('react');
const reactclass = require('create-react-class');
const css = require('./threecontent-home.css');
let Project_icon = require("../../../../images/project_icon.jpg");

class Threecontent extends React.Component {
    
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
        <div className={'threecontent-home_Container'+' font'+' font_color'}>
            <h1 className='project_header'>Projects</h1>
            <img className='project_icon' src={Project_icon} />
            <ul className='project_list'>
                <li>
                    <a className='project_link' href='/projects'>
                        <h3>Hub by Mogo</h3>
                        <p>Learn about how I managed the inital build and further development of Mogo's automation platform Hub.</p>
                    </a>
                </li>
                <li>
                    <a className='project_link' href='/projects'>
                        <h3>Mogo's DMP</h3>
                        <p>When Mogo onboarded a Data Managment Platform (DMP) I was part of the team that set up the connections and segment taxonomy.</p>
                    </a>
                </li>
                <li>
                    <a className='project_link' href='/projects'>
                        <h3>JustAnswer's ChatBot</h3>
                        <p>When JustAnswer was building out a ChatBot I was the main developer implementing the conversation logic.</p>
                    </a>
                </li>
                <li>
                    <a className='project_link' href='/projects'>
                        <h3>Red Bull Youth America's Cup</h3>
                        <p>I managed a team of sailors aiming to compete in the Red Bull Youth America's Cup.</p>
                    </a>
                </li>
            </ul>
        </div>
        )
    }

}

module.exports = Threecontent;