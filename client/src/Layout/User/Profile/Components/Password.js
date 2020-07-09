import React from 'react'
import Modal from "@material-ui/core/Modal";
export default function Password(){
    const [modal,setModal] = React.useState(false)
    return (        
        <div className='container'>
            <h3 className="my-3">Change Password</h3>

            <div className='mb-3'>
                <label>Current Password</label>
                <input name='currPassword' type='password' className='form-control'/>
            </div>
            <div className='mb-3'>
                <label>New Password</label>
                <input name='newPassword' type='password' className='form-control'/>
            </div>
            <div className='mb-3'>
                <label>Confirm Password</label>
                <input name='confirmPassword' type='password' className='form-control'/>
            </div>
            <button className='btn partic-btn partic-blue-bg mt-4 px-5 py-3' onClick={()=>setModal(true)}>Change Password</button>
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
                        <p>Password Changed</p>
                        <button className='btn btn-danger partic-btn' onClick={()=>setModal(false)}>Close</button>
                    </div>
                </div>
            </div>
            </Modal>
        </div>
    )
}