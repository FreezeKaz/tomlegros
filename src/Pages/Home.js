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

    handleDownload = () => {
        // You can perform any additional actions before the download if needed
        // For now, let's keep it simple and just initiate the download
        window.location.href = 'https://github.com/FreezeKaz/WebsiteData/blob/main/CV/English%20CV.pdf';
      };

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
                        <p className="aboutMeText offset-1 col-10">Hi ! I'm Tom, a game programmer and student in third year of my Bachelor at Gaming Campus at Lyon, France. I've been programming since my young age.</p>
                        <p className="aboutMeText offset-1 col-10">Here you will be able to see some of the projects I'm the most proud of during those 3 year at Gaming Campus. I have a strong perserverance for learning new things and being able to understand them as fast as possible as well as taking challenges. I always put some addition time in all of my / our creations to polish and / or add new features to always go further in the making. I also put additional interest in artistic direction in games but also in the asset making and the game graphics, I love making my assets my way so that I can make a pleasing game for me and for others.</p>
                        <p className="aboutMeText offset-1 col-10">I also make websites, like this one thanks to our first year's formation on WEB languages. Now if you have any questions feel free to contact me :{"))"}</p>
                        <div className="buttonContainer">
                            <a class="button" download="Tom LE GROS.pdf" href="https://download939.mediafire.com/a2k2srdck8qgsyM3bJK_8jCS8n06C4UDsuQerLZaEvUnlULy2aS0C4rUgHMcYSc7vD1xLlzBLzBeRDtlUFzhqHlV_3hehQDfCglpfP8RWY5lQ08Q9ftD_GDaMBTyrXAlkTWpzjaeNT-zf39V0hCo_AJ8lI_6nW1XOvvU_CLupg/9nm28oufdo4htjh/English+CV.pdf"> 
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
