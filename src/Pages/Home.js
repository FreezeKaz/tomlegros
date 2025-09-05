import * as React from "react"
import "../Styles/Home.scss"
import {
    Link
} from "react-router-dom";
import Skills from "../Components/Skill.js"
import Project from "../Components/Project.js"
import {FaDiscord, FaGithub, FaLinkedin, FaPhone, FaEnvelope, FaLocationArrow } from "react-icons/fa"

import bgVideo from "../Content/video/nightcity.mp4"
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
        const hash = window.location.hash;



        const response = await fetch(LINK + '/api/skill?populate=*', {method: 'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
		const skills = await response.json()
        this.setState({ skills }, () => {
            console.log(this.state.skills); // ✅ logs correctly now
          });       
        
        const response1 = await fetch(LINK + '/api/project?populate=*', {method: 'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
		const projects = await response1.json()
        this.setState({ projects }, () => {
            console.log(this.state.projects); // ✅ logs correctly now
          });

    }

    handleDownload = () => {
        window.location.href = 'https://github.com/FreezeKaz/WebsiteData/blob/main/CV/English%20CV.pdf';
      };

    render = () => {
        return (
            
            <>
            <div id="Home">
                <div className="title">
                    <div className="position">
                        <h1 className="text-center">Game Developer</h1>
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
                <section id="aboutmee"></section>
                <div id="aboutme">  
                    <div className="aboutContent offset-xl-3 col-xl-6 row">
                        <h2>About Me</h2>
                        <p className="aboutMeText offset-1 col-10">I am a Professional Unity Developer, specializing in 2D and mobile game development, with proven experience creating multiple prototypes and delivering a published title on both Android and iOS platforms, I bring strong expertise in creating optimized and visually engaging mobile games.</p>
                        <p className="aboutMeText offset-1 col-10">I thrive in fast paced and creative environments. I'm extremely experienced in rapid prototyping, putting to life existing ideas or new concepts or even refining through testing and user feedback. My work emphasizes scalability, quality, user-engagement and thus, ensuring each project to grow into a polished market-ready product.</p>
                        <p className="aboutMeText offset-1 col-10">I am passionate about creating engaging, addictive and casual experiences. By combining intuitive UI/UX and polished 2D visuals, my goal is to create games that are fun and accessible while maintaining high performance and quality.</p>
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
                <section id="contactt"></section>

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
                            <li class="list-item"><FaPhone/><span class="contact-text phone"><a href="tel:(+33) 6 83 45 05 43" title="Give me a call">(+33) 6 83 45 05 43</a></span></li>
                            <li class="list-item d-flex align-items-center"><FaEnvelope/><span class="contact-text gmail"><a href="mailto:tom.legros564@gmail.com" title="Send me an email">tom.legros564@gmail.com</a></span></li>
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
