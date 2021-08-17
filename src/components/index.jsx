import { React, Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './index.scss'

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            click: false,    
        }
    }

    handleClick = () => {
        this.setState({ click: !this.state.click });
    }

    Close = () => {
        this.setState({ click: false });
    }

    render() { 
        return (
            <Router>
                <div className={this.state.click ? "main-container" : ""} onClick={()=>this.Close()}>
                    <nav className="navbar" onClick={(e)=>e.stopPropagation()}>
                        <div className="nav-container">
                        <a href="/" className="nav-logo">
                            Leaflet
                        </a>

                        <ul className={this.state.click ? "nav-menu active" : "nav-menu"}>
                            <li className="nav-item">
                                <a href="/" className="nav-links" onClick={this.state.click ? this.handleClick : null}> Home </a>
                            </li>
                            <li className="nav-item">
                                <a href="/about" className="nav-links" onClick={this.state.click ? this.handleClick : null}> About </a>
                            </li>
                            <li className="nav-item">
                                <a href="/blog" className="nav-links" onClick={this.state.click ? this.handleClick : null}> Blog </a>
                            </li>
                            <li className="nav-item">
                                <a href="/contact" className="nav-links" onClick={this.state.click ? this.handleClick : null}> Contact Us </a>
                            </li>
                        </ul>
                        <div className="nav-icon" onClick={this.handleClick}>
                            <i className={this.state.click ? "fa fa-times" : "fa fa-bars"}></i>
                        </div>
                        </div>
                    </nav>
                </ div>
            </Router>
        );
    }
}
 
export default Index;