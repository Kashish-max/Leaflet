import { React, Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './index.scss'

import Body from './body'

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            click: false,    
        }
    }

    Opportunities = ["Compititions", "Quizzes", "Hackathons", "Internships", "Workshops", "Webinars", "Events", "Courses"]

    handleClick = () => {
        this.setState({ click: !this.state.click });
    }

    Close = () => {
        this.setState({ click: false });
    }

    render() { 
        return (
            <Router>
                <div className="navbar-container">
                    <div className={this.state.click ? "main-container" : ""} onClick={()=>this.Close()}>
                        <nav className="navbar" onClick={(e)=>e.stopPropagation()}>
                            <div className="nav-container">
                                <div className="nav-left">
                                    <div className="nav-icon" onClick={this.handleClick}>
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 172 172" style={{ "fill": "#000000" }}>
                                            <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ "mix-blend-mode": "normal" }}>
                                                <path d="M0,172v-172h172v172z" fill="none"></path>
                                                <g fill="#5f6368">
                                                    <path d="M14.33333,35.83333v14.33333h143.33333v-14.33333zM14.33333,78.83333v14.33333h143.33333v-14.33333zM14.33333,121.83333v14.33333h143.33333v-14.33333z"></path>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                    <a href="/" className="nav-logo">
                                        LeafLet
                                    </a>
                                </div>
                                <ul className={this.state.click ? "nav-menu active" : "nav-menu"}>
                                    <li className="nav-item">
                                        <a href="/" className="nav-links" onClick={this.state.click ? this.handleClick : null}> Home </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="mailto:kashish24102001@gmail.com" className="nav-links" onClick={this.state.click ? this.handleClick : null}>Contact Us </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <div className="sub-bar">
                            <ul className="sub-bar-container">
                                {this.Opportunities.map((item, index) => {
                                    return (
                                        <li>{item}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
                <switch>
                    <Route exact path="/"><Body Opportunities={this.Opportunities} /></Route>
                </switch>
            </Router>
        );
    }
}
 
export default Index;