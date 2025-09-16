import * as React from "react"
import "../Styles/Header.scss"
import {
    Link
} from "react-router-dom";

import {FaDiscord, FaGithub, FaBars, FaMinus, FaLinkedin } from "react-icons/fa"

class Header extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props);
        this.state = {
            isMenuOpen: false, 
        }
        
  
    }

     componentDidMount() {

        window.addEventListener('scroll', this.stickyTwitch);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.stickyTwitch);
    }


    toggleSideMenu = () => {
        if (this.state.isMenuOpen) {
            this.setState({
                isMenuOpen: false,
            }, () => {
                document.getElementById("Header-side-nav").classList.remove("opened");
                document.body.classList.remove('menu-open');

            })
        }
        else {
            this.setState({
                isMenuOpen: true,
            }, () => {
                document.getElementById("Header-side-nav").classList.add("opened");
                document.body.classList.add('menu-open');

            })
        }
    }

    stickyTwitch = () => {
        const twitchDiv = document.getElementById("Twitch-link");
        if (document.documentElement.scrollTop > parseInt(getComputedStyle(twitchDiv).top.substring(0, 3))) {
            let distance = document.documentElement.scrollTop - 120
            twitchDiv.style.transform = 'translateY(' + distance + 'px)'
        }
        else {
            twitchDiv.style.transform = 'translateY(' + 0 + 'px)'
        }
    }
    handleClick = (id) => {
        if (window.location.hash == "#/" || window.location.hash == "#") {
          // Already on homepage, scroll!
          const el = document.getElementById(id);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        } else {
          // Go to homepage with hash
          window.location.href = `/tomlegros/`;
        }
      };
    
    render = () => {
        const OpenMenu = (id) => {

          };
        return (
            <>
                <header>
                    <div id="Header">
                        {/* PC HEADER */}
                        {this.renderPCBand()}

                        {/* MOBILE HEADER */}
                        {this.renderMobileBand()}
                    </div>

                    <div id="Header-side-nav" className="">
                        <div className="title-container">
                            <FaMinus className="close-button " onClick={this.toggleSideMenu} />
                            <h2 className="text-color-gradient-theme">Nav</h2>
                        </div>
                        <div className="link-container">
                        <a href="/tomlegros">Skills</a>
                        <a href="/tomlegros">Portfolio</a>
                        <a href="/tomlegros">About Me</a>
                        <a href="/tomlegros">Contact</a>
                        </div>
                    </div>
                </header>
                <a href="https://github.com/FreezeKaz">
                <div id="Twitch-link">  
                    <FaGithub />
                </div>
                </a>
            </>
        );
    }
    renderPCBand = () => {
        const handleClick = (id) => {
            if (window.location.hash == "#/" || window.location.hash == "#") {
              // Already on homepage, scroll!
              const el = document.getElementById(id);
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
              }
            } else {
              // Go to homepage with hash
              window.location.href = `/tomlegros/`;
            }
          };
        return (    
            <div className="header d-none d-xl-flex">
                <div className="header-band-container d-none d-xl-flex">


                    <div className="nav-container ">
                        <Link to="/">
                            <div className="name-container">
                                <h1 className="text-color-gradient-theme">Tom LE GROS</h1>
                            </div>
                        </Link>
                        <div className="items-nav-container">
                            {/* <span>[</span>
                            
                        <a href="/tomlegros">Skills</a>
                        <a href="/tomlegros">Portfolio</a>
                        <a href="/tomlegros">About Me</a>
                        <a href="/tomlegros">Contact</a>
                            <span>]</span> */}
                        </div>
                    </div>
                    <div className="social-networks-container">

                        <a href='https://www.linkedin.com/in/tom-le-gros/'>
                            <FaLinkedin />
                        </a>
                        <a href='https://github.com/FreezeKaz'>
                            <FaGithub />
                            </a>
                        <a>
                            <FaDiscord />
                            </a>
                    </div>
                </div>
            </div>              

        )
    }
    renderMobileBand = () => {
        return (
            <div className="header-mobile d-xl-none">
                <div className="space-logo d-none d-sm-block"></div>
                <div className="header-band-container">
                    <div className="name-container">
                        <h1 className="text-color-gradient-theme d-none d-sm-block">Tom LE GROS</h1>
                        <h1 className="text-color-gradient-theme d-block d-sm-none">Tom LE GROS</h1>
                    </div>
                    <FaBars onClick={this.toggleSideMenu} />
                </div>
            </div>
        )
    }
}

export default Header;
