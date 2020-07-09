import React from 'react';
import mainPic from '../../Asset/img/homehead.png'
import secPic from '../../Asset/img/homebot.png'
import './Home.css'
import {eventData}from '../../dataTest/event.js'
import { Link } from 'react-router-dom';

export default  class Home extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            search : '',
            categories : 'Categories',
            events : [],
        }
        this.handleChange = this.handleChange.bind(this)
    }
    componentDidMount(){
        this.setState({
            events : eventData,
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
    handleBtnClick(id){
        window.location.href = `/events/${id}`
    }
    renderEventBtn(price,status,id){
        if(status === 'SOLD')
        return(<button className="btn partic-btn partic-grey-bg ev-bt" disabled>Sold</button>)
        if(parseInt(price) === 0)
            return(<button className="btn partic-btn partic-yellow-bg ev-bt" onClick={()=>this.handleBtnClick(id)}>Free</button>)
        else 
            return(<button className="btn partic-btn partic-blue-bg ev-bt" onClick={()=>this.handleBtnClick(id)}>Buy</button>)
    }
    
    render(){
        return(
            <div>
                <div className="cont-head row">
                    <div className="col-sm-12 col-md-12 col-lg-5 mb-3 home-txt">
                        <div className="row">
                            <h1 className="font-weight-bold m-0">Dimanapun Partynya Disni Ticketnya.</h1>
                        </div>
                        <div className="row partic-yellow-t">
                            <p className="main-q">#Partyforlife</p>
                        </div>
                        <div className="row partic-yellow-t mt-1">
                            <Link to="/events"><button className="btn partic-yellow-bg partic-btn py-3 px-5">Discover More</button></Link>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-7">
                        <img src={mainPic} alt="main" width="100%"/>
                    </div>
                </div>
                <div className="cont-search">
                    <div><h5>Find Party</h5></div>
                    <div className="row mt-4">
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
                        <div className="col-4 col-md-3">
                            <button className="btn partic-btn partic-blue-bg pl-4 pr-4" >Search</button>
                        </div>
                    </div>
                </div>
                <div className="cont-event">
                    <h4><b>Trending Event</b></h4>
                    <div className="row" style={{justifyContent :"center"}}>
                        {
                            this.state.events.map(event=>(
                                <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-3" key={event.id}>
                                    <div className="card ev-card" style={{width:"100%"}}>
                                        <a href={`/events/${event.id}`}><img src={event.img} className="ev-img" alt={event.id}/></a>
                                        {this.renderEventBtn(event.price,event.status,event.id)}
                                        <div className="card-body pt-0">
                                            <span className="partic-yellow-t" style={{width : ".5rem"}}>{event.date}</span>
                                            <h5 className="card-title m-0"><b>{event.name}</b></h5>
                                            <span style={{fontSize:".7rem"}} className="partic-grey-t"><b>{event.location}</b></span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="row" style={{justifyContent :"center",marginTop:"4rem"}}>
                        <Link to="/events"><button className="brn ev-s-btn"><b>SEE ALL EVENT &nbsp;&nbsp;&nbsp;<i className="fa fa-arrow-right"></i></b></button></Link>
                    </div>
                </div>
                <div className="cont-foot row">
                    <div className="col-sm-12 col-md-6"><img src={secPic} width="100%" alt='bot'></img></div>
                    <div className="col-sm-12 col-md-6" style={{alignSelf:"center"}}>
                        <div className="ml-5">
                            <p><b>Subsribe newletter for special promo and good offer.</b></p>
                            <input name="subscribe" placeholder="Input your email" className="sub-in mr-3 mb-3"/>
                            <button className="btn partic-btn partic-blue-bg p-2">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}