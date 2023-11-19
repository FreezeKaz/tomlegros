import * as React from "react"
import "../Styles/App.scss"
import "../Styles/Home.scss"
import {
    Link
} from "react-router-dom";
import LINK from "../Content/link";
import bgVideo from "../Content/video/sukuna.mp4"
import Filters from "./Filters";
class PP extends React.Component {
    constructor(props) {
        super(props)
        this.state={

		}
    }   

    render = () => {
        var myId = this.props.project.name;
        return (    
            <div class="popup" id={myId}>

            <div class="popup__content ">
            <a href="#portfolio" className="button" onClick = {() =>  document.body.style.overflow = 'unset'}>X</a>
                <h2 class="heading-secondary">{this.props.project.name}</h2>
                <p class="popup__text">{this.props.project.description}</p>
                <div className="presentationVideo row">
                    <video className="bgvideo" autoPlay muted loop>
                        <source src={this.props.project.videoURL} type="video/mp4" />
                    </video>
                    <div className="filters offset-2">
                    {this.props.project.filters.data && this.props.project.filters.data.map((filters,i) => <Filters filter={filters} test={i}/> )}
                    </div>
                </div>
              
               
            </div>
        </div>
        );
    }
}

export default PP;
