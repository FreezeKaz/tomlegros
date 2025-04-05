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

        
              

        </div>
        );
    }
}

export default PP;
