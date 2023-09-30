import * as React from "react"
import "../Styles/Footer.scss"
import {
    Link
} from "react-router-dom";

class Footer extends React.Component {
    constructor(props)
    {
        super(props)
        this.state={
            sponsors:[]
        }
    }

    async componentDidMount(){

      
    }
    render = () => {
        return (
            <div id="Footer">
                <div className="container">
                    <div className="main-content row">
                    </div>
                    <div className="bottom-footer row ">
                        <span className="col-12 offset-1 col-lg-10 text-center">©2023 by Tom LE GROS</span>
                    </div>
                </div>
            </div>
        );
    }

}

export default Footer;
