import { React, Component } from 'react';
import './body.scss'
import { FilterData } from './jsonData/filters';
import { eventData } from './jsonData/eventData';
import Demo from './socialShare';
import Calendar from './calender';

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
            modalDisplay: "none",
            bodyOverflow: "initial",
            modalData: eventData[2],
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
                            <div className="header-right">
                                <div className="header-right-text">
                                    <h1>LeafLet</h1>
                                    <p>Welcome to IT UIET, here you can find all the information regarding information teachnology branch. Learning, Engagements and Hiring while connecting students, professionals, companies, colleges, educators and learners.To facilitate this process we at Leaflet have made a one stop platform for the same.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Event-modal */}
                    <div className="modal-container" style={{ "display": this.state.modalDisplay }}>
                        <div className="modal">
                            <div className="md-card">
                                <button className="card-close" type="button" onClick={() => {
                                    this.setState({ modalDisplay: "none" });
                                    document.body.style.overflow = "initial";
                                }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 172 172" style={{ "fill": "rgba(0, 0, 0, 0.87)" }}>
                                        <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ "mix-blend-mode": "normal" }}>
                                            <path d="M0,172v-172h172v172z" fill="none"></path>
                                            <g fill="rgba(0, 0, 0, 0.87)">
                                                <path d="M40.90039,30.76628l-10.13411,10.13411l45.09961,45.09961l-45.09961,45.09961l10.13411,10.13411l45.09961,-45.09961l45.09961,45.09961l10.13411,-10.13411l-45.09961,-45.09961l45.09961,-45.09961l-10.13411,-10.13411l-45.09961,45.09961z"></path>
                                            </g>
                                        </g>
                                    </svg>
                                </button>
                                <div className="md-card-up">
                                    <div className="card-up-head">
                                        <div>
                                            <span style={{"color": "rgb(234, 67, 53)"}}>Updated on: {this.state.modalData.posted_on} { this.state.modalData.time } IST</span>
                                            <span style={{"color": ""}}>{this.state.modalData.payment.slice(0, this.state.modalData.payment.search(',')).toLowerCase() == "free"
                                            ? "Free Registration" : "Registration Fee: " + this.state.modalData.prize}</span>
                                            <span style={{"color": "rgb(251, 188, 5)"}}>{this.state.modalData.status.slice(0, this.state.modalData.status.search(','))}</span>
                                        </div>
                                        <div className="visit-proj">
                                            {/* <i class="fa fa-calendar" aria-hidden="true"></i> */}
                                            <Calendar />
                                            <a href={this.state.modalData.site} target="_blank" style={
                                                this.state.modalData.status.slice(0, this.state.modalData.status.search(',')).toLocaleLowerCase() == "live" ? {"background": "#1a73e8"} : {"background": "rgb(234, 67, 53)"}
                                            }>
                                                {this.state.modalData.status.slice(0, this.state.modalData.status.search(',')).toLocaleLowerCase() == "live" ? "Register" : "Closed"}
                                            </a>
                                        </div>
                                    </div>
                                    <div className="card-up-body">
                                        <div>
                                            <h3>{this.state.modalData.title}
                                                <span>{this.state.modalData.provider.slice(0, this.state.modalData.provider.search(','))}</span>
                                            </h3>
                                            <div className="event-descrp">
                                                {this.state.modalData.description}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="md-card-down">
                                    <div className="md-card-down-left">
                                        <div>
                                            <i class="fa fa-calendar" aria-hidden="true" aria-label="Add to Calender"></i>
                                            <span>{this.state.modalData.start_date} { this.state.modalData.time } IST - </span>
                                            <span>{this.state.modalData.end_date} { this.state.modalData.time } IST</span>
                                        </div>
                                        <div>
                                            <i class="fa fa-check" aria-hidden="true"></i>
                                            <span>
                                                Eligibility: { this.state.modalData.eligibility == "All" ? "All" : this.state.modalData.eligibility.slice(0, this.state.modalData.eligibility.search(',All'))}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="md-card-down-right">
                                        <div className="social-icons">
                                            <span><i className="fa fa-share"></i>Share</span>
                                            <Demo eventUrl={this.state.modalData.site} eventTitle={this.state.modalData.title} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                
                    </div>
                    

                    {/* Event-Feed */}
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
                                                <a onClick={() => {
                                                        this.setState({ modalDisplay: "flex" });
                                                        document.body.style.overflow = "hidden";
                                                        this.setState({ modalData: item });
                                                    }}>
                                                    <div className="card-upper-half">
                                                        <picture>
                                                            <img src={item.image} />
                                                        </picture>
                                                    </div>
                                                    <div className="card-lower-half">
                                                        <h4>{item.title}</h4>
                                                        <span>{item.provider.slice(0, item.provider.search(','))}</span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 172 172">
                                                            <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ "mix-blend-mode": "normal" }}>
                                                                <path d="M0,172v-172h172v172z" fill="none"></path>
                                                                <g fill="#1a73e8">
                                                                    <path d="M100.33333,35.32943l-10.75,10.75l32.7539,32.75391h-100.83724v14.33333h100.83724l-32.7539,32.7539l10.75,10.75l50.67057,-50.67057z"></path>
                                                                </g>
                                                            </g>
                                                        </svg>
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