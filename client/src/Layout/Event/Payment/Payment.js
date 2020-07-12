import React from 'react';
import instance from '../../../Modules/instances';

export default function Payment(props){
    const [pay,setPay] = React.useState(false)    
    const [p,setP] = React.useState([]);
    const [data,setData] = React.useState({
        firstName : '',
        lastName : '',
        email : '',
        method : 'cc'
    })
    const handleChange = (ev) =>{
        setData({...data,[ev.target.name] : ev.target.value})
    }
    const handleSubmit = (ev) => {
        ev.preventDefault();
        instance.post('/makepayment.php',{
            name : data.firstName + ' ' +  data.lastName,
            method : data.method,
            email : data.email,
            id : props.match.params.id
        }).then(res=>{
            console.log(res.data)
            setPay(true)
        })
    }
    React.useEffect(()=>{
        instance.get('/pmethod.php').then(res=>{
            setP(res.data);
        })
        // eslint-disable-next-line
    },[])
    if(pay) 
        return (
            <div className='container text-center'>
                <h1>PAYMENT SUCCESS</h1>
                <i className='fa fa-check-circle text-success my-3' style={{fontSize:"15rem"}}/>
                <p style={{fontSize : '1.5rem'}}>Ticket has been sent to you <span className="partic-yellow-t">{data.email}</span></p>
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
                        <input className="form-control" name="firstName" type='text' required onChange={handleChange} />
                    </div>
                    <div className='col-12 col-md-6 pr-0'>
                        <label>Last Name</label>
                        <input className="form-control" name="lastName" type='text' required onChange={handleChange}/>
                    </div>                        
                </div>
                <div className='row mb-3'>
                    <label>Email</label>
                    <input className="form-control" name="email" type='email' required onChange={handleChange}/>
                </div>
                <div className='row mb-3'>
                    <label>Payment Method</label>
                    <select className="form-control" name='method'  onChange={handleChange} required>
                        {
                            p.map((el)=>(
                                <option key={el.id} value={el.id}>{el.method}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="dropdown-divider my-3"></div>
                <form className="py-3" onSubmit={handleSubmit}>
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
                                <input type='checkbox' name="update" required/>
                            </div>
                            <div className='col-11'>
                                <p>Partic can send me emails about the best events happening nearby.</p>
                            </div>                                
                        </div>
                        <div className="row">
                            <small className='muted-text'>I accept the <a className="text-primary" href='/'>terms of service</a> and have 
                            <a className="text-primary" href='/'> read the privacy policy</a>. I agree that Partic may <a href='/' className='text-primary'>share my information</a> with the event organizer.</small>
                        </div>
                        <div className='text-center mt-5'>
                        <button className="btn partic-btn partic-blue-bg px-5 py-2" type='submit'>PAY</button>
                        </div>
                    </div>
                </form>
            </div>
            </div>
        </React.Fragment>
    )    
}