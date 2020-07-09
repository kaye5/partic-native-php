import React from 'react'
import './Create.css'
import { Link } from 'react-router-dom';
export default function Create(){
    const [currency,setCurrency] = React.useState('IDR');
    function handleClick(event){
        setCurrency(event.target.id)
    }
    return(
        <React.Fragment>
            <div className="row font-weight-bold">
                <h2>Create Events</h2>
            </div>
            <div className="row">
                <div className="col-12 col-md-6 font-weight-bold mb-4">
                <form method="POST" action="#">
                    <div className="create-input">
                        <label>Event name</label>
                        <input className="form-control" type="text" name="name" required/>
                    </div>
                    <div className="create-input">
                        <label>Description</label>
                        <textarea className="form-control textarea" name="description" required maxLength="800"/>
                    </div>
                    <div className="create-input">
                        <label>Price</label>
                        <div className="row">
                            <div className="col-4 col-sm-3 col-lg-3 p-0">
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {currency}
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <span className="dropdown-item" onClick={(ev)=>handleClick(ev)} id="IDR">IDR</span>
                                        <span className="dropdown-item" onClick={(ev)=>handleClick(ev)} id="USD">USD</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-8 col-sm-9 col-lg-6 p-0">
                                <input className="form-control" type="number" name="price" required/>
                            </div>
                        </div>
                    </div>
                    <div className="create-input" style={{width:"50%"}}>
                        <label>Slot</label>
                        <input className="form-control" type="number" name="slot" required/>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 p-0 mb-3">
                            <div className="row"><label>Date</label></div>
                            <div className="row">
                                <input type="date" value={new Date()} name="date" required className="partic-date-picker"/>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 p-0 mb-3">
                            <div className="row"><label>Time</label></div>
                            <div className="row">
                                <input type="time" value={new Date()} name="time" required className="partic-date-picker"/>
                            </div>
                        </div>
                    </div>
                    <div className="create-input">
                        <label>Location</label>
                        <input className="form-control" type="text" name="location" required/>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 p-0 mb-3">
                            <div className="row"><label>Open Registration</label></div>
                            <div className="row">
                                <input type="date" value={new Date()} name="openRegis" required className="partic-date-picker"/>
                            </div>
                        </div>
                        <div className=" col-12 col-md-6 p-0">
                            <div className="row"><label>Close Registration</label></div>
                            <div className="row">
                                <input type="date" value={new Date()} name="closeRegis" required className="partic-date-picker"/>
                            </div>
                        </div>
                    </div>
                    </form>
                </div>
                <div className="col-12 col-md-6">
                    <div className="create-img">
                    <img src="https://via.placeholder.com/1080x1350" alt="post" width="100%"className="img"/>
                    <p className="create-img-text">Edit picture</p>
                    </div>                    
                </div>
            </div>    
            <div className="row mt-5">
                    <Link to="/events/manage/1"><button className="btn partic-btn partic-yellow-bg py-2 px-5">Create Event</button></Link>
            </div>
        </React.Fragment>
    )
}
