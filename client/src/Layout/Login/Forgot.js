import React from 'react';
import './Forgot.css'
export default function Forgot(){
    const [isSend,setSend] = React.useState(false)
    if(!isSend)
    return (
        <form className="forgot-form">
            <h2 className="text-center mb-4">FORGOT PASSWORD</h2>
            <p className="text-center mb-3">Enter email to send forgot password link</p>
            <div>
                <label htmlFor="email" className="grey-text">
                Email
                </label>
                <input type="email" id="email" className="form-control" required/>
                <div className="text-center" style={{marginTop : "5rem"}}>
                    <button className="btn partic-btn partic-yellow-bg py-3 px-5" onClick={()=>setSend(true)}>Send Link</button>
                </div>
            </div>
        </form>
    )
    else return (
        <div className="font-weight-bold">
            <h2 className="text-center mb-4">FORGOT PASSWORD</h2>
            <p className="text-center mb-3">Your reset password link has been sent.</p>
            <p className="text-center mb-3">Please check your email.</p>            
            <div className="text-center" style={{marginTop : "5rem"}}>
                <a href="/"><button className="btn partic-btn partic-yellow-bg py-3 px-5">OK</button></a>
            </div>            
        </div>
    )
}