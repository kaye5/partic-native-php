import React, {useState} from 'react'
import Modal from "@material-ui/core/Modal";
import './Checkout.css'
export default function Checkout(props){
    const [event,setEvent] = useState({})
    const [modal,setModal] = useState(false)
    // eslint-disable-next-line 
    React.useEffect(()=>{
        setEvent(props.event)
    })

    function toggle(){
        setModal(!modal)
    };

    return (
        <React.Fragment>
            <button className="btn partic-btn partic-blue-bg" style={{width:"50%"}} onClick={()=>toggle()}>Order</button>
            <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={modal}
            onClose={()=>toggle()}
            className="p-2 modal-checkout-option"
            >
            <div
                className="modal-checkout"
                role="document"
                style={{ textAlign: "center" ,top:"15%"}}>
                <div className="modal-content">
                
                    <div className="row">
                        <div className="col-12 col-md-7 align-left p-2">
                            <div className="p-3">
                                <h4><b>{event.name}</b></h4>
                            </div>
                            <div className="divider-checkout mb-3" />
                            <div className="row text-left p-3" style={{minHeight : "400px"}}>
                                <div className="col-12">
                                    <h4 className="m-0"><b>{event.name}</b></h4>
                                    <p className='m-0'>{event.price}</p>
                                    <p className='m-0'>{event.date}</p>
                                    <input type="number" className="checkout-in" style={{float:"right"}}/>
                                </div>
                            </div>
                            <div className="my-3 p-3 text-right">
                                <a href={`/events/${event.id}/payment`}><button className="btn partic-btn partic-yellow-bg p-3">Check out</button></a>
                            </div>
                            <div className="divider-checkout mb-5" />
                            
                        </div>
                        <div className="text-left col-12 col-md-5 checkout-side p-0">
                            <div className="row p-0 mb-3"><img src={event.img} alt="checkout" width="100%" height="200px"/></div>
                            <div className="p-2">
                                <div className="row mb-5">
                                    <h5><b>Order Summary</b></h5>
                                </div>
                                <div className="row" style={{marginBottom : "5rem"}}>
                                    <div className="col-6"><p>{event.name}</p></div>
                                    <div className="col-6 text-right"><p>{event.price}</p></div>
                                </div>
                                <div style={{borderTop : "1px solid black",marginBottom:"5px"}} />
                                <div className="row font-weight-bold">
                                    <div className="col-6">Total</div>
                                    <div className="col-6 text-right">{event.price}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
            </Modal>
        </React.Fragment>
    )
}