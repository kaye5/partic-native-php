import React from 'react';

export default function Payment(){
    const [pay,setPay] = React.useState(false)
    console.log(pay)
    if(pay) 
        return (
            <div className='container text-center'>
                <h1>PAYMENT SUCCESS</h1>
                <i className='fa fa-check-circle text-success my-3' style={{fontSize:"15rem"}}/>
                <p style={{fontSize : '1.5rem'}}>Ticket has been sent to you <span className="partic-yellow-t">Email</span></p>
                <div className="row my-3">
                    <div className='col-12 col-md-6 mb-3'><a href='/'><button className="btn partic-btn partic-blue-bg px-5 py-2">Home</button></a></div>
                    <div className='col-12 col-md-6'><a href='/profile/ticket'><button className="btn partic-btn partic-yellow-bg px-5 py-2">My Ticket</button></a></div>
                </div>
            </div>
        )
    else 
    return(        
        <React.Fragment>
            <div className="container font-weight-bold">
            <div className="m-5 text-center">
                <h1>CHECK OUT</h1>
            </div>
            <div>
                <h3>CONTACT INFORMATION</h3>
                <div className="row mb-3">
                    <div className='col-12 col-md-6 p-0'>
                        <label>First name</label>
                        <input className="form-control" name="firstName" type='text' />
                    </div>
                    <div className='col-12 col-md-6 pr-0'>
                        <label>Last Name</label>
                        <input className="form-control" name="Last Name" type='text' />
                    </div>                        
                </div>
                <div className='row mb-3'>
                    <label>Email</label>
                    <input className="form-control" name="Last Name" type='email' />
                </div>
                <div className="dropdown-divider my-3"></div>
                <div className="py-3">
                    <h3 className="mb-3">PAYMENT METHOD</h3>
                    <p>Clicking 'Place Order will open a new tab allowing you to pay with your OVO account. return to this page when you're finished</p>
                    <div className="dropdown-divider"></div>
                    <div className="p-3">
                        <div className="row">
                            <div className='col p-0'>
                                <input type='checkbox' name="update"/>
                            </div>
                            <div className='col-11'>
                                <p>Keep me updated on the latest news,events,and exclusive offers from this event organizer.</p>
                            </div>                                
                        </div>
                        <div className="row">
                            <div className='col p-0'>
                                <input type='checkbox' name="update"/>
                            </div>
                            <div className='col-11'>
                                <p>Eventbrite can send me emails about the best events happening nearby.</p>
                            </div>                                
                        </div>
                        <div className="row">
                            <small className='muted-text'>I accept the <a className="text-primary" href='/'>terms of service</a> and have 
                            <a className="text-primary" href='/'> read the privacy policy</a>. I agree that Partic may <a href='/'>share my information</a> with the event organizer.</small>
                        </div>
                        <div className='text-center mt-5'>
                        <button className="btn partic-btn partic-blue-bg px-5 py-2" onClick={()=>setPay(true)}>PAY</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </React.Fragment>
    )    
}