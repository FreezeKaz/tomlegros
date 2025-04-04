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
        var linkHref = "/tomlegros/project/" + this.props.project.documentId;
        return (
           
            <div  className = "col-xl-4 col-sm-10 project">
                 <a href={linkHref}>
                <img   className="miniature" src={this.props.project.miniatureURL} />
                <div className="cardContent">
                <p className="description">
                    {this.props.project.description}
                </p>
                </div>
                </a>
            </div>


        );
    }
}

export default Project;
