import { React, Component } from 'react';
import './body.scss'
import { FilterData } from './jsonData/filters';
import { eventData } from './jsonData/eventData';
import Demo from './socialShare';

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            click: false,
            sort: [],
            status: "",
            eligibility: "",
            payment: "",
            provider: "",
            resetFilterClass: "reset-filters",
        }
    }

    checkFiltersActive = () => {
        if (this.state.status) {
            this.setState({ resetFilterClass: "reset-filters clear-filters" });
        }
    }

    handleClick = () => {
        this.setState({ click: !this.state.click });
    }

    Close = () => {
        this.setState({ click: false });
    }    

    sortedData = [].concat(eventData)
    .sort((a, b) => a.itemM > b.itemM ? 1 : -1)
    .map((item, i) => 
        <div key={i}> {item.matchID} {item.timeM}{item.description}</div>
    );


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
                                    <p>Welcome to IT UIET, here you can find all the information regarding information teachnology branch. Learning, Engagements and Hiring while connecting students, professionals, companies, colleges, educators and learners.To facilitate this process we at Leaflet have made a one stop platform for the same.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="feed">
                        <div className="feed-container">
                            <div className="filters">
                                <button className={this.state.resetFilterClass}>
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
                                                            <input
                                                                type={item.type}
                                                                name={item.title}
                                                                value={label}
                                                                onChange={(e) => {
                                                                    if (e.target.checked) {
                                                                        e.target.name == "Sort by" && this.setState({sort: e.target.value});
                                                                        e.target.name == "Status" && this.setState({status: e.target.value});
                                                                        e.target.name == "Eligibility" && this.setState({eligibility: e.target.value});
                                                                        e.target.name == "Payment" && this.setState({payment: e.target.value});
                                                                        e.target.name == "Provider" && this.setState({ provider: e.target.value });
                                                                    }
                                                                }}
                                                            />
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
                                    {eventData.filter(event => {
                                        let cond1 = event.status.toLowerCase().includes(this.state.status.toLowerCase());
                                        let cond2 = event.eligibility.toString().toLowerCase().includes(this.state.eligibility.toLowerCase());
                                        let cond3 = event.payment.toLowerCase().includes(this.state.payment.toLowerCase());
                                        let cond4 = event.provider.toLowerCase().includes(this.state.provider.toLowerCase());

                                        if (cond1 && cond2 && cond3 && cond4) {
                                            return event
                                        }

                                    }).map((item, index) => {
                                        return (
                                            <div className="material-card">
                                                <a onClick="">
                                                    <div className="card-upper-half">
                                                        <picture>
                                                            <img src={item.image} />
                                                        </picture>
                                                    </div>
                                                    <div className="card-lower-half">
                                                        <h4>{item.title}</h4>
                                                        <span>{item.provider.slice(0, item.provider.search(','))}</span>
                                                        <Demo eventUrl={item.site} eventTitle={item.title} />
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