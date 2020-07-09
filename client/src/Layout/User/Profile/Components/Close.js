import React from 'react'
import Modal from "@material-ui/core/Modal";
export default function Close(){
    const [modal,setModal] = React.useState(false)
    return (        
        <div className='container font-weight-bold'>
            <h3 className="my-3">Close Account</h3>
            <p>Thank you for using Eventbrite Events. If there is anything we can do to keep you with us, please let us know. </p>
            <p>Please take a moment to <span className='partic-yellow-t'> let us know </span> why you are leaving: </p>
            <input name='service' type='text' className='form-control my-3'/>
            <p>Please type "CLOSE" and your password below to confirm that you wish to close your account: </p>
            <div className='row my-3'>
                <div className='col-6 p-0'>
                    <label className='partic-yellow-t'>Close</label>
                    <input name='close' type='text' className='form-control'/>
                </div>
            </div>
            <div className='row mb-3'>
                <div className='col-6 p-0'>
                    <label className='partic-yellow-t'>Enter your password</label>
                    <input name='close' type='text' className='form-control'/>
                </div>
            </div>
            <button className='btn partic-btn partic-blue-bg mt-4 px-5 py-3' onClick={()=>setModal(true)}>Close Account</button>
            <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={modal}
            onClose={()=>setModal(false)}
            >
            <div
                className="modal-dialog"
                role="document"
                style={{ textAlign: "center" ,top:"15%"}}
            >
                <div className="modal-content">
                    <div className="modal-body">
                        <i className='fa fa-check-circle text-success my-3' style={{fontSize:"10rem"}}/>
                        <p>It's sad to see you leave</p>
                        <button className='btn btn-danger partic-btn' onClick={()=>setModal(false)}>Close</button>
                    </div>
                </div>
            </div>
            </Modal>
        </div>
    )
}