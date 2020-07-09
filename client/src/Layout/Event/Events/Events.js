import React from 'react';
import '../Events.css'
import {eventData}from '../../../dataTest/event.js'
import { Link, Redirect } from 'react-router-dom';
export default class Events extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            events : [],
            query : false,
            categories : 'Categories',
            loc : ['Medan','Jakarta','Bandung','Surabaya','Makasar','Yogyakarta'],
            link : false
        }
        this.handleChange  = this.handleChange.bind(this)
        
    }
    handleLocation(link){
        this.setState({link})
    }
    componentDidMount(){
        let query = new URLSearchParams(window.location.search)
        this.setState({
            events : eventData,
            query : query.get('collection')
        })
    }
    componentWillUpdate(){
        let query = new URLSearchParams(window.location.search)
        if(this.state.query !== query.get('collection'))
            this.setState({
                query : query.get('collection')
            })
    }
    handleChange(ev){
        let temp = this.state;
        if(ev.target.label)
            temp[ev.target.accessKey]  = ev.target.value;    
        else 
            temp[ev.target.name]  = ev.target.value;
        this.setState(temp);
    }
    renderEventBtn(price,status){
        if(status === 'SOLD')
            return(<button className="btn partic-btn partic-grey-bg ev-bt" disabled>Sold</button>)
        if(parseInt(price) === 0)
            return(<button className="btn partic-btn partic-yellow-bg ev-bt">Free</button>)
        else 
            return(<button className="btn partic-btn partic-blue-bg ev-bt">Buy</button>)
    }
    render(){
        return(
            <React.Fragment>
                {
                    this.state.link && <Redirect to={window.location.pathname+`?collection=${this.state.link}`} />
                }
                <div id="carouselExampleControls" className="carousel slide mb-5" data-ride="carousel">
                    <div className="carousel-inner shadow" style={{maxHeight : "500px",borderRadius:"20px"}}>
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="https://quotefancy.com/media/wallpaper/3840x2160/1784356-Audrey-Hepburn-Quote-Life-is-a-party-Dress-for-it.jpg" alt="First slide" height="500px"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://wallpapercave.com/wp/wp2927194.jpg" alt="Second slide" height="500px"/>
                        </div>
                    </div>

                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                    
                </div>
                <div className="cont-search p-3">
                    <div className="row">
                        <div className="col-12 col-md-3 " style={{textAlign:"center"}}>
                            <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{this.state.categories}</button>
                            <div className="dropdown-menu">
                                {/* eslint-disable-next-line  */}
                                <option className="dropdown-item" accessKey="categories" value="Party" onMouseDown={this.handleChange}>Party</option>
                                {/* eslint-disable-next-line  */}
                                <option className="dropdown-item" accessKey="categories" value="Music" onMouseDown={this.handleChange}>Music</option>
                                {/* eslint-disable-next-line  */}
                                <option className="dropdown-item" accessKey="categories" value="Show" onMouseDown={this.handleChange}>Show</option>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 my-3"><input name="search" placeholder="search" value={this.state.search} onChange={this.handleChange} className="inpt form-control"/>
                        </div>
                        <div className="col-4 col-md-3 my-2">
                            <button className="btn partic-btn partic-blue-bg pl-4 pr-4" >Search</button>
                        </div>
                    </div>
                </div>
                <div className="my-4">
                    <div>
                        <h3><b>Collection</b></h3>
                        <span>Checkout event arround you.</span>                        
                    </div>
                    <div className="coll-scroll">
                        {
                            this.state.loc.map((data,index)=>(
                                <React.Fragment key={index}>
                                    {
                                        this.state.loc.indexOf(data)%2 === 0 ? 
                                        <div className="coll-btn" key={data} >
                                        <button className="btn partic-btn partic-yellow-bg" style={{width:"100%"}} onClick={()=>this.handleLocation(data)}>{data}</button>
                                        </div>
                                        : 
                                        <div className="coll-btn">
                                        <button className="btn partic-btn partic-blue-bg" style={{width:"100%"}} onClick={()=>this.handleLocation(data)}>{data}</button>
                                        </div>
                                    }
                                </React.Fragment>                                
                            ))
                        }
                    </div>
                </div>
                <div className="allEvents">
                    <div className="my-5">
                        <h2><b>Events around : </b></h2>
                        {this.state.query && <span className="btn partic-btn partic-blue-bg" style={{width : "200px"}}>{this.state.query}</span>}
                    </div>
                    {
                        this.state.events.map(event=>(                            
                            <div className="row row-evs my-5" key={event.id}>
                                <div className="col-sm-12 col-md-3 p-0">
                                    <a href={`/events/${event.id}`}><img src={event.img} alt={event.id} width="100%" className="img-evs"/></a>
                                </div>
                                <div className="col-sm-12 col-md-6">
                                    <h2><b>{event.name}</b></h2>
                                    <p className="partic-yellow-t">{event.date}</p>                                    
                                    <p><b><i className="fa fa-map-marker"></i>&nbsp;&nbsp;&nbsp;{event.location}</b></p>
                                </div>
                                <div className="col-sm-12 col-md-3">
                                    <Link to={`/events/${event.id}`}>
                                    {this.renderEventBtn(event.price,event.status)}
                                    </Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </React.Fragment>
        )
    }
}