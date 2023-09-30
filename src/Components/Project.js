import * as React from "react"
import "../Styles/App.scss"
import "../Styles/Home.scss"
import {
    Link
} from "react-router-dom";
import ProjectPopup from "../Components/ProjectPopup.js"
import LINK from "../Content/link";

class Project extends React.Component {
    constructor(props) {
        super(props)
        this.state={

		}
    }   
   



    render = () => {
        var linkHref = "#" + this.props.project.attributes.name;
        return (
           
            <div  className = "col-xl-4 col-sm-10 project">
                 <a href={linkHref} onClick = {() =>  document.body.style.overflow = 'hidden'}>
                <img   className="miniature" src={LINK + (this.props.project.attributes.miniature.data &&  this.props.project.attributes.miniature.data.attributes.url)} />
                <div className="cardContent">
                <p className="description">
                    {this.props.project.attributes.description}
                </p>
                </div>
                </a>
                <ProjectPopup project={this.props.project.attributes}/>
            </div>


        );
    }
}

export default Project;
