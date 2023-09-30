import * as React from "react"
import "../Styles/App.scss"
import "../Styles/Home.scss"
import {
    Link
} from "react-router-dom";
class Filters extends React.Component {
    constructor(props) {
        super(props)
        this.state={

		}
    }   

    render = () => {

        var myFilter = this.props.filter.attributes.type;
        return (    
            <div className="filter col-1 text-center" id={this.props.filter.attributes.css}>
                <p>{myFilter}</p>
        </div>
        );
    }
}

export default Filters;
