import { React, Component } from 'react';
import './body.scss'
import { FilterData } from './jsonData/filters';

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            click: false,    
        }
    }

    testCardArray = [..."12345678912345"]
    handleClick = () => {
        this.setState({ click: !this.state.click });
    }

    Close = () => {
        this.setState({ click: false });
    }

    render() { 
        return (
            <>
                <section className="body">
                    <div className="header">
                        <div className="header-container">
                            {/* <div className="header-left">
                                <div className="header-left-text">
                                    <h1>Opportunities</h1>
                                    <ul>
                                        {this.props.Opportunities.map((item, index) => {
                                            return (
                                                <li>{item}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div> */}
                            <div className="header-right">
                                <div className="header-right-text">
                                    <h1>LeafLet</h1>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil dicta voluptatem illum ab, fugit voluptatum quibusdam temporibus ipsa culpa quo quos facere consequatur nemo, reiciendis sint modi! Sint, amet harum.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="feed">
                        <div className="feed-container">
                            <div className="filters">
                                <button className="reset-filters">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 172 172">
                                        <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ "mix-blend-mode": "normal" }}>
                                            <path d="M0,172v-172h172v172z" fill="none"></path>
                                            <g>
                                                <path d="M40.90039,30.76628l-10.13411,10.13411l45.09961,45.09961l-45.09961,45.09961l10.13411,10.13411l45.09961,-45.09961l45.09961,45.09961l10.13411,-10.13411l-45.09961,-45.09961l45.09961,-45.09961l-10.13411,-10.13411l-45.09961,45.09961z"></path>
                                            </g>
                                        </g>
                                    </svg>
                                    Clear Filters
                                </button>
                                <div className="filters-container">
                                    {FilterData.map((item, index) => {
                                        return (
                                            <div className={item.class + " filter-set"}>
                                                <h3>{item.title}</h3>
                                                {item.labels.map((label, indexLabel) => {
                                                    return (
                                                        <div className="filter-label">
                                                            <input type={item.type} name={item.title} />
                                                            <label>{label}</label>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        )                                        
                                    })}
                                </div>
                            </div>
                            <div className="material">
                                <div className="material-container">
                                    {this.testCardArray.map((item, index) => {
                                        return (
                                            <div className="material-card">
                                                <a onClick="">
                                                    <div className="card-upper-half">
                                                        <picture>
                                                            <img src="/images/sample1.jpg" />
                                                        </picture>
                                                    </div>
                                                    <div className="card-lower-half">
                                                        <h4>Interpersonal Skills Quiz</h4>
                                                        <span>by lorem Foundation</span>
                                                    </div>
                                                </a>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}
 
export default Body;