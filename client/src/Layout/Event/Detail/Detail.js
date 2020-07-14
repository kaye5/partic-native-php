import React from 'react';
import './Detail.css'
import Checkout from '../Checkout/Checkout';
import instance from '../../../Modules/instances'
import {commentData} from '../../../dataTest/comment'
import Comment from './comment';
import Auth from '../../../Modules/Auth';
export default  class Detail extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            event : {
            },
            update : false,
            comment : commentData,
            commentCount : 3,
            like : {
                count : 0,
                isLike : false
            }
        }
        this.updateMe = this.updateMe.bind(this)
    }
    updateMe(){
        this.setState({update : !this.state.update})
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        if(this.state.update !== prevState.update){
            instance.get('comment/get.php?id='+this.props.match.params.id).then(res=>{
                console.log(res.data);
                this.setState({comment : res.data})
            })
            instance.get('/like/get.php?id='+this.props.match.params.id).then(res=>{
                this.setState({like : res.data})
                if(res.data.isLike)
                    document.getElementById('fav-btn').className = 'btn detail-act-btn text-danger'
            })
        }
    }
    componentDidMount(){
        try{
            //get event data
            instance.get(`/event/get.php?id=${this.props.match.params.id}`).then((res)=>{
                this.setState({event : res.data})
            })
            instance.get('comment/get.php?id='+this.props.match.params.id).then(res=>{
                this.setState({comment : res.data})
            })
            instance.get('/like/get.php?id='+this.props.match.params.id).then(res=>{
                this.setState({like : res.data})
                if(res.data.isLike)
                    document.getElementById('fav-btn').className = 'btn detail-act-btn text-danger'
            })
                // eslint-disable-next-line
                throw 'error'
        } catch (err){
            this.setState({events : 'not found'})
        }        
    }
    favClick(ev){
        instance.post('like/like.php',{
            event : this.props.match.params.id
        }).then((res)=>{
            this.updateMe()
        })
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
            return <></>
        var element = []
        comment.forEach((com,i)=>{
            element.push(
                <div className="cont-search" key={i}>
                    <div className="row">
                        <div className="col-12 col-lg-8">
                            <h6><b>{com.email}</b><p>{com.date}</p></h6>
                            <p className="text-justify">{com.message}</p>
                        </div>
                    </div>                    
                </div>
            )
        })
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
                        <img src={event.image} alt="main" width="100%" style={{borderRadius:"25px"}}/>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="row">
                            <div className="col-3" style={{fontSize:"4rem",textAlign:"center"}}>
                                <i className="fa fa-user-circle"></i>
                            </div>
                            <div className="col-8" style={{alignSelf : "center"}}>
                                <h4><b>{event.hostName}</b></h4>
                                <h6>{event.email}</h6>
                            </div>
                        </div>
                        <div>
                            <p className="partic-yellow-t m-0">{event.datecreate}</p>
                            <h3><b>{event.name}</b></h3>
                            <p><i className="fa fa-map-marker mr-2"/>{event.location}</p>
                            <p><i className="fa fa-clock-o mr-2" />{event.openregis}</p>
                            <Checkout event={this.state.event}/>
                        </div>
                    </div>
                </div>
                <div className="row cont-search p-3 my-5">
                    <div>
                    <button className="btn detail-act-btn" id='fav-btn' onClick={(ev)=>this.favClick(ev)}><i className='fa fa-heart mr-2'/>{this.state.like.count}</button>
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
                        <p className="text-justify">{this.state.event.description}</p>
                    </div>
                </div>
                <div className="detail-comment my-5" id='comments'>
                    <h4><b>Comments</b></h4>                                 
                    <div>
                        {this.renderComment()}
                    </div>
                    {
                        Auth.isUserAuthenticated() &&  
                        <div>
                            <Comment eventid={this.props.match.params.id} update={this.updateMe}/>
                        </div>
                    }       
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