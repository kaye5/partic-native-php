import React from 'react';
import {eventData} from '../../../dataTest/event'
import {commentData} from '../../../dataTest/comment'
import './Detail.css'
import Checkout from '../Checkout/Checkout';
export default  class Detail extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            event : {

            },
            comment : [],
            commentCount : 3,
        }
    }
    
    componentDidMount(){
        try{
            let idx = parseInt(this.props.match.params.id);
            if(eventData[idx-1])
                this.setState({event : eventData[idx-1],comment : commentData})
            else 
                // eslint-disable-next-line
                throw 'error'
        } catch (err){
            this.setState({events : 'not found'})
        }
    }
    favClick(ev){
        if(ev.target.className === 'btn detail-act-btn text-danger')
            document.getElementById('fav-btn').className = 'btn detail-act-btn'
        else 
            document.getElementById('fav-btn').className = 'btn detail-act-btn text-danger'
    }
    likeClick(i){
        let temp = this.state.comment;        
        if(temp[i].like)
            temp[i].like = false
        else 
            temp[i].like= true
        this.setState({comment : temp})
    }
    isLike(like){
        if(like)
            return 'fa fa-heart mr-2 text-danger'
        else 
            return 'fa fa-heart mr-2'
    }
    renderComment(){
        var comment = this.state.comment
        if(comment.length === 0)
            return 1
        var element = []
        for(let i = 0 ; i < this.state.commentCount;i++){         
            if(i>= comment.length)   
                break;
            element.push(
                <div className="cont-search" key={i}>
                    <div className="row">
                        <div className="col-12 col-lg-8">
                            <h6><b>{comment[i].name}</b></h6>
                            <p className="text-justify">{comment[i].message}</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className="row float-right">
                                <button onClick={()=>this.likeClick(i)} className="btn detail-act-btn"><i className={this.isLike(comment[i].like)} />99</button>
                                <button className="btn detail-act-btn">Reply</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return element
    }
    handleShowMore(){
        let temp = this.state.commentCount;
        this.setState({commentCount : temp+3})
    }
    render(){
        let event = this.state.event
        if(event !== 'not found')
        return(
            <React.Fragment>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <img src={event.img} alt="main" width="100%" style={{borderRadius:"25px"}}/>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="row">
                            <div className="col-3" style={{fontSize:"4rem",textAlign:"center"}}>
                                <i className="fa fa-user-circle"></i>
                            </div>
                            <div className="col-8" style={{alignSelf : "center"}}>
                                <h4><b>{event.hostName}</b></h4>
                                <h6>{event.hostUsername}</h6>
                            </div>
                        </div>
                        <div>
                            <p className="partic-yellow-t m-0">{event.date}</p>
                            <h3><b>{event.name}</b></h3>
                            <p><i className="fa fa-map-marker mr-2"/>{event.location}</p>
                            <p><i className="fa fa-clock-o mr-2" />{event.date}</p>
                            <Checkout event={this.state.event}/>
                        </div>
                    </div>
                </div>
                <div className="row cont-search p-3 my-5">
                    <div>
                    <button className="btn detail-act-btn" id='fav-btn' onClick={(ev)=>this.favClick(ev)}><i className='fa fa-heart mr-2'/> 99</button>
                    <a href='#comments'><button className="btn detail-act-btn">Comments</button></a>
                    </div>
                    <div className="det-cont-btn">
                    <button className="btn detail-act-btn"><i className="fa fa-phone partic-yellow-t"/></button>
                    <button className="btn detail-act-btn"><i className="fa fa-envelope  partic-yellow-t"/></button>
                    </div>
                </div>
                <div className="ev-detail">
                    <div className="row detail-tab p-4">
                        <h4><i className="fa fa-question-circle mx-3"/>Detail</h4>
                    </div>
                    <div className="row detail-text p-4">
                        <h4>Title</h4>
                        <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper facilisis eros eu commodo. Sed tristique aliquet nunc. Nam ut fringilla turpis, laoreet fringilla nisi. Sed varius augue in vehicula bibendum. Suspendisse a dolor velit. Proin sed orci molestie, malesuada sem id, auctor sem. Praesent suscipit sit amet odio tempus fermentum. Quisque vel erat elementum, condimentum nisl et, tincidunt enim.
                        <br/><br/>
                        Phasellus tincidunt leo elit. Quisque auctor lacinia diam, a tincidunt magna faucibus euismod. Aenean laoreet accumsan iaculis. Mauris non ex dignissim, lacinia tortor vitae, condimentum velit. Integer non finibus nunc. Proin odio turpis, efficitur nec dictum vel, tincidunt ut lectus. In at diam accumsan, ullamcorper mi ut, tincidunt elit. In egestas eros augue, non consequat mi facilisis sit amet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                    </div>
                </div>
                <div className="detail-comment my-5" id='comments'>
                    <h4><b>Comments</b></h4>
                    <div>
                        {this.renderComment()}
                    </div>
                    {
                        this.state.commentCount < this.state.comment.length &&
                        <div className="detail-show">
                            <p onClick={()=>this.handleShowMore()}>Show more <i className="fa fa-chevron-down"/></p>
                        </div>
                    }                    
                </div>
            </React.Fragment>
        )
        else 
            return (
                <React.Fragment>
                    <h2><b>Event not found</b></h2>
                    <a href="/events"><button className="btn partic-btn partic-yellow-bg">Check our other event</button></a>
                </React.Fragment>
            )
    }
}