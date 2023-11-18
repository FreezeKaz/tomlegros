import * as React from "react"
import "../Styles/Home.scss"
import {
    Link
} from "react-router-dom";
import Skills from "../Components/Skill.js"
import Project from "../Components/Project.js"
import {FaDiscord, FaGithub, FaLinkedin, FaPhone, FaEnvelope, FaLocationArrow } from "react-icons/fa"

import bgVideo from "../Content/video/sukuna.mp4"
import LINK from "../Content/link";

class Home extends React.Component {
    constructor(props) {
        super(props)
        
        this.state={
			skills:[],
            projects:[]
		}
    }

    async componentDidMount(){

        const response = await fetch(LINK + '/api/skills?populate=*', {method: 'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
		const skills = await response.json()
		this.setState({skills:skills})
        
        const response1 = await fetch(LINK + '/api/projects?populate=*', {method: 'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
		const projects = await response1.json()
		this.setState({projects:projects})
    }

    render = () => {
        return (
            <>
            <div id="Home">
                <div className="title">
                    <div className="position">
                        <h1 className="text-center">Game Developper</h1>
                    </div>
                </div>

                <div id="skills">
                    <h2>Skills & Tools</h2>
                    <div className = "skillContainer row ">
                         {this.state.skills.data && this.state.skills.data.map((skills,i) => <Skills skill={skills} test={i} className="big col-5 col-xl m-xl-2" /> )}
                    </div>
                </div>
                <div id="separator"></div>
                <div id="portfolio">
                    <h2>Portfolio</h2>
                    <div className = "projectContainer row ">
                         {this.state.projects.data && this.state.projects.data.map((projects,i) => <Project project={projects} test={i} className="big col-5 col-xl m-xl-2" /> )}
                    </div>
                </div>
                <div id="separator"></div>
                <div id="aboutme">  
                    <div className="aboutContent offset-3 col-6 row">
                        <h2>About Me</h2>
                        <p className="aboutMeText offset-1 col-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        <p className="aboutMeText offset-1 col-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        <p className="aboutMeText offset-1 col-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        <div className="buttonContainer">
                            <a class="button" href="#">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Download my CV
                            </a>
                        </div>
                    </div>
                </div>
                <div id="separator"></div>
                <section id="contact">
                    <h2>Contact</h2>
                    <div class="contact-wrapper">
                        <form id="contact-form" class="form-horizontal" role="form">
                        <div class="form-group">
                            <div class="col-sm-12">
                            <input type="text" class="form-control" id="name" placeholder="NAME" name="name" value="" required/>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-sm-12">
                            <input type="email" class="form-control" id="email" placeholder="EMAIL" name="email" value="" required/>
                            </div>
                        </div>
                        <textarea class="form-control" rows="10" placeholder="MESSAGE" name="message" required></textarea>
                        <button class="btn btn-primary send-button" id="submit" type="submit" value="SEND">
                            SEND
                        </button>
                        </form>
                        <div class="direct-contact-container">
                            <ul class="contact-list">
                            <li class="list-item"> <FaLocationArrow/><span class="contact-text place">Lyon, France</span></li>
                            <li class="list-item"><FaPhone/><span class="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">(+33) 6 29 73 81 41</a></span></li>
                            <li class="list-item"><FaEnvelope/><span class="contact-text gmail"><a href="mailto:#" title="Send me an email">tlegros@gaming.tech</a></span></li>
                            </ul>
                            <ul class="social-media-list">
                            <a href='https://github.com/FreezeKaz' target="_blank" class="contact-icon">
                            <li>
                                <FaGithub/>
                            </li>
                            </a>
                            <a href='https://www.linkedin.com/in/tom-le-gros/' class="contact-icon">
                            <li>
                                <FaLinkedin/>
                            </li>     
                            </a>
                            </ul>
                        </div>
                        
                    </div>
                    
                    </section>  
                
                <div class="parallax">
                    <video className="bgvideo" autoPlay muted loop>
                        <source src={bgVideo} type="video/mp4" />
                    </video>
                </div>

            </div>

        
            </>
        );
    }
}

export default Home;
