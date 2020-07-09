import React from 'react';
import '../Events.css'
import {eventData}from '../../../dataTest/event.js'
import { Link, } from 'react-router-dom';
export default class MyEvent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            events : [],
        }
        
    }
    componentDidMount(){
        let query = new URLSearchParams(window.location.search)
        this.setState({
            events : eventData,
            query : query.get('collection')
        })
    }
    render(){
        return(
            <React.Fragment>                
                <div className="allEvents">
                    <div className="my-5">
                        <h2><b>My Events : </b></h2>
                    </div>
                    {
                        this.state.events.map(event=>(                            
                            <div className="row row-evs my-5" key={event.id}>
                                <div className="col-sm-12 col-md-3 p-0">
                                    <a href={`/events/manage/${event.id}`}><img src={event.img} alt={event.id} width="100%" className="img-evs"/></a>
                                </div>
                                <div className="col-sm-12 col-md-6">
                                    <h2><b>{event.name}</b></h2>
                                    <p className="partic-yellow-t">{event.date}</p>                                    
                                    <p><b><i className="fa fa-map-marker"></i>&nbsp;&nbsp;&nbsp;{event.location}</b></p>
                                </div>
                                <div className="col-sm-12 col-md-3">
                                    <Link to={`/events/manage/${event.id}`}>
                                    <button className="btn partic-btn partic-yellow-bg px-3 m-3">Manage Event</button>
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