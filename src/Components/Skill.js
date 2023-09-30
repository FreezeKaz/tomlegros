import * as React from "react"
import "../Styles/App.scss"
import "../Styles/Home.scss"
import {
    Link
} from "react-router-dom";
import LINK from "../Content/link";

class Skill extends React.Component {
    constructor(props) {
        super(props)
        this.state={

		}
    }   


    render = () => {
        return (
            <div className = "col-xl-2 col-sm-10 skill">
                <img className="skillIcon" src={LINK + (this.props.skill.attributes.icon.data &&  this.props.skill.attributes.icon.data.attributes.url)} />
                <p className="skillName">{this.props.skill.attributes.name}</p>
                <p className="skillDesc text-center">{this.props.skill.attributes.description}</p>

            </div>
        );
    }
}

export default Skill;
