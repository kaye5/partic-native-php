import React from 'react';
import {profileData} from '../../../dataTest/profile'
import {ticketData} from '../../../dataTest/ticket'
import './Ticket.css'
import photo from '../../../Asset/img/p1.jfif'
export default  class Ticket extends React.Component{
    state = {
        profile : {},
        ticket : []
    }
    componentDidMount(){
        this.setState({
            profile : profileData,
            ticket : ticketData,
        })
    }
    renderStatusColor(stat){
        if(stat === "attended")
            return "text-success"
        else if(stat === 'expired')
            return "partic-grey-t"
        else
            return "text-danger"
    }
    render(){
        return(
            <React.Fragment>
                <div className="tic-head">
                    <div className="row">
                        <div className="col-3" style={{fontSize:"4rem",textAlign:"center"}}>
                            <i className="fa fa-user-circle"></i>
                        </div>
                        <div className="col-8" style={{alignSelf : "center"}}>
                            <h4><b>{this.state.profile.name}</b></h4>
                            <h6>{this.state.profile.email}</h6>
                        </div>
                    </div>
                </div>
                <div className="tic-body mt-5">
                    {
                        this.state.ticket.map(data=>(
                            <React.Fragment>
                            <div className="coll-tic my-5">
                            <div className="row row-evs p-3" key={data.id}>
                                <div className="col-sm-12 col-md-3">
                                    <b><h4>{data.name}</h4></b>
                                    <p className="partic-yellow-t">{data.date}</p>
                                </div>
                                <div className="col-sm-12 col-md-9" style={{alignSelf:"center"}}>
                                    <a style={{float : "right",fontSize:"2rem",color:"black"}}
                                        data-toggle="collapse" href={"#collapseExample"+data.id} role="button" aria-expanded="false" aria-controls={"collapseExample"+data.id}
                                    >
                                      <i className="fa fa-chevron-down"></i>  
                                    </a>
                                </div>                                
                            </div>
                            <div className="collapse py-4" id={"collapseExample"+data.id}>  
                                <div className="row">
                                    <div className="col-12 col-md-3">
                                        <img src={photo} width="100%" style={{borderRadius : "10px"}} alt={data.id}/>
                                    </div>
                                    <div className="col-12 col-md-6" style={{fontSize : "1.2rem"}}>
                                        <div className="row tic-t"><i className="fa fa-map-marker"/>&nbsp;&nbsp;&nbsp;{data.location}</div>
                                        <div className="row tic-t"><i className="fa fa-clock-o"/>&nbsp;&nbsp;&nbsp;{data.time}</div>
                                        <div className="row tic-t"><i className="fa fa-calendar-o" />&nbsp;&nbsp;&nbsp;{data.date}</div>
                                        <div className={"row tic-t "+this.renderStatusColor(data.status)}>Status : {data.status.toUpperCase()}</div>
                                    </div>
                                    <div className="col-12 col-md-3" style={{textAlign:"center"}}>
                                        <p className="font-weight-bold">Qty : {data.qty}</p>
                                        <button className="btn partic-btn partic-yellow-bg"><i className="fa fa-download"/>&nbsp;Download ticket</button>
                                    </div>
                                </div>                                
                            </div>
                            </div>
                            
                            </React.Fragment>
                        ))
                    }
                </div>
            </React.Fragment>
        )
    }
}