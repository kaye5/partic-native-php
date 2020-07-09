import React from 'react'
import {eventData} from '../../../dataTest/event' 
import { Link } from 'react-router-dom'
import {commentData} from '../../../dataTest/comment'
import Modal from "@material-ui/core/Modal";
export default class Manage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            currency : 'IDR',
            event : {

            },
            fav : '',
            comment : [],
            commentCount : 3,
            modalContact : false,
            edit : false,
        }
    }
    componentDidMount(){
        let idx = parseInt(this.props.match.params.id)
        this.setState({event : eventData[idx-1],comment: commentData});
    }
    handleClick(event){
        this.setState({currency : event.target.id});
    }
    handleChange(ev){
        let temp = this.state.event
        temp[ev.target.name] = ev.target.value
        this.setState({
            event : temp
        })
    }
    handleFav(){
        let likeBtn = document.getElementById('fav-btn')
        if(likeBtn.classList.contains('text-danger')){
            likeBtn.classList.remove('text-danger')
        } else {
            likeBtn.classList.add('text-danger')
        }
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
    handleShowMore(){
        let temp = this.state.commentCount;
        this.setState({commentCount : temp+3})
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
    render(){
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-12 col-md-6 mb-5 p-0">
                    <div className="row" style={{justifyContent:"center"}}>
                        <div className="create-img">
                        <img src={this.state.event.img} alt="post" height="400px" width="100%" className="img"/>
                        <button className="btn partic-btn partic-yellow-bg create-img-text">Edit picture</button>
                        </div>
                    </div>
                    <div className="row" style={{justifyContent:"center"}}>
                        <div className="cont-search text-center">
                            <button className={"btn detail-act-btn "+this.state.fav} id="fav-btn"  onClick={(e)=>this.handleFav(e)}><i class="fa fa-heart mr-2"></i> 99</button>
                            <a href="#comments"><button className="btn detail-act-btn">Comments</button></a>
                        </div>
                    </div>
                    <div className="row mt-5" style={{justifyContent:"center"}}>
                        <Link to="/events/participant/1"><button className="btn partic-btn partic-blue-bg py-2 px-5">Manage Participant</button></Link>
                    </div>
                </div>
                <div className="col-12 col-md-6 font-weight-bold mb-4">
                <form method="POST" action="#">
                    <div className="create-input">
                        <label>Event name</label>
                        <input className="form-control" value={this.state.event.name} onChange={(e)=>this.handleChange(e)} type="text" name="name" required/>
                    </div>
                    <div className="create-input">
                        <label>Description</label>
                        <textarea className="form-control textarea" name="description" required maxLength="800" value={this.state.event.description} onChange={(e)=>this.handleChange(e)}/>
                    </div>
                    <div className="create-input">
                        <label>Price</label>
                        <div className="row">
                            <div className="col-4 col-sm-3 col-lg-3 p-0">
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {this.state.currency}
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <span className="dropdown-item" onClick={(ev)=>this.handleClick(ev)} id="IDR">IDR</span>
                                        <span className="dropdown-item" onClick={(ev)=>this.handleClick(ev)} id="USD">USD</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-8 col-sm-9 col-lg-6 p-0">
                                <input className="form-control" type="number" name="price" required value={parseInt(this.state.event.price)} onChange={(e)=>this.handleChange(e)}/>
                            </div>
                        </div>
                    </div>
                    <div className="create-input" style={{width:"50%"}}>
                        <label>Slot</label>
                        <input className="form-control" type="number" name="slot" required value={this.state.event.slot} onChange={(e)=>this.handleChange(e)}/>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 p-0 mb-3">
                            <div className="row"><label>Date</label></div>
                            <div className="row">
                                <input type="date" name="date" required className="partic-date-picker"/>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 p-0 mb-3">
                            <div className="row"><label>Time</label></div>
                            <div className="row">
                                <input type="time" name="time" required className="partic-date-picker"/>
                            </div>
                        </div>
                    </div>
                    <div className="create-input">
                        <label>Location</label>
                        <input className="form-control" type="text" name="location" required value={this.state.event.location} onChange={(e)=>this.handleChange(e)}/>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 p-0 mb-3">
                            <div className="row"><label>Open Registration</label></div>
                            <div className="row">
                                <input type="date" name="openRegis" required className="partic-date-picker"/>
                            </div>
                        </div>
                        <div className=" col-12 col-md-6 p-0">
                            <div className="row"><label>Close Registration</label></div>
                            <div className="row">
                                <input type="date" name="closeRegis" required className="partic-date-picker"/>
                            </div>
                        </div>
                    </div>                    
                    </form>
                    <div className="my-3 flex-wrap">
                        <button className="btn partic-btn partic-yellow-bg py-2 px-5 m-3" onClick={()=>this.setState({modalContact : true})}>Contact Info</button>
                        <button className="btn partic-btn partic-yellow-bg py-2 px-5 m-3">Send Email</button>
                        <button className="btn partic-btn partic-yellow-bg py-2 px-5 m-3">Edit Event</button>
                    </div>
                </div>                
            </div>
            <div className="detail-comment my-5" id="comments">
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
            <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.modalContact}
            onClose={()=>this.setState({modalContact : false})}
            >
            <div
                className="modal-dialog"
                role="document"
                style={{ textAlign: "center" ,top:"15%"}}
            >
                <div className="modal-content">
                    <div className="modal-body">
                        <h2>Contact Info</h2>
                        {
                            this.state.edit ? 
                            <React.Fragment>
                                <button className="btn detail-act-btn"><i className="fa fa-phone partic-yellow-t"/></button>
                                <input name='phone' type='tel' className='form-control'/><br/>
                                <button className="btn detail-act-btn"><i className="fa fa-envelope  partic-yellow-t"/></button>
                                <input name='email' type='email' className='form-control'/>
                                <br/>
                                <button className="btn detail-act-btn" onClick={()=>this.setState({edit : false})}>Save</button>
                            </React.Fragment>
                            :
                            <React.Fragment>
                                <button className="btn detail-act-btn"><i className="fa fa-phone partic-yellow-t"/></button>
                                <span className='profile-edit' onClick={()=>this.setState({edit : true})}>083194617930 <i className='fa fa-edit ml-2'/></span><br/>
                                <button className="btn detail-act-btn"><i className="fa fa-envelope  partic-yellow-t"/></button>
                                <span className='profile-edit' onClick={()=>this.setState({edit : true})}>partic@partic.com <i className='fa fa-edit ml-2'/></span>
                            </React.Fragment>
                        }
                    </div>
                </div>
            </div>
            </Modal>
        </React.Fragment>
    )}
}