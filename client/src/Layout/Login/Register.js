import React from 'react'
import './Register.css'
import { Redirect } from 'react-router-dom';
import '../../Modules/Auth'
import Auth from '../../Modules/Auth';
export default function Register(){
    
    const[password,setPassword] = React.useState({});
    const[error,setError] = React.useState(false);
    const[level,setLevel] = React.useState(1);

    const handleNext = (ev) =>{
        ev.preventDefault();
        setLevel(2);
    }
    const handleRegister = (ev) => {
        ev.preventDefault();
        if(password.password !== password.confirmPass)
            setError(true)
        else {
            setError('done');
            Auth.authenticateUser();
        }
            
    }
    const handleChange = ev => {
        setPassword({...password,[ev.target.name] : ev.target.value})
    }
    const handleCancle = ev => {
        ev.preventDefault();
        setLevel(1);
    }
    function renderProfileForm(){
        return (
        <form onSubmit={handleNext}>
            <div className='text-left'>
                <div className='my-5'>
                    <div className='my-3'>
                        <label>Full name</label>
                        <input name='name' className='form-control' placeholder='Fullname' required/>
                    </div>
                    <div className='my-3'>
                        <label>Email</label>
                        <input name='email' className='form-control' placeholder='Email' type='email' required/>
                    </div>                    
                    <div className='my-3'>
                        <label>Phone number</label>
                        <input name='phone' className='form-control' placeholder='Phone number' type='tel' required/>
                    </div>
                    <div className='my-3'>
                        <label>Gender</label>
                        <select className='form-control' name='gender'>
                            <option value='male'>Male</option>
                            <option value='female'>Female</option>
                        </select>
                    </div>              
                </div>
            </div>
            <div>
            <button className='btn partic-btn partic-yellow-bg py-2' style={{width : "50%"}}>Next</button>
            </div>
        </form>
        )
    }
    function renderSecurityForm(){
        return (
        <form onSubmit={handleRegister}>
            <div className='text-left'>
                <div>
                <div className='my-5'>
                    <div className='my-3'>
                        <label>Password</label>
                        <input name='password' className='form-control' type='password' onChange={handleChange} value={password.password} required/>
                    </div>
                    <div className='my-3'>
                        <label>Re-enter password</label>
                        <input name='confirmPass' className='form-control' type='password' onChange={handleChange} value={password.confirmPass} required/>
                    </div> 
                </div>
                </div>
            </div>
            {
                error && 
                <div class="alert alert-danger fade show" role="alert">
                <h6>Password not match</h6>
                </div>
            }
            <div>
                <button className='btn partic-btn partic-blue-bg py-3 mr-3' style={{width : "45%"}} onClick={handleCancle}>Cancle</button>
                <button className='btn partic-btn partic-yellow-bg py-3' style={{width : "45%"}}>Submit</button>
            </div>
        </form>
        )
    }
    function RenderMainForm(){
        if(level === 1)
            return renderProfileForm();
        else 
            return renderSecurityForm();
    }
    function isActive(){
        if(level === 2)
            return 'active'
        else 
            return ''
    }
    return (
        <div className='container text-center'>
            {
                error === 'done' && <Redirect to='/home' />
            }
            <h2>Register</h2>
            <div id="stepProgressBar" className='mt-5'>
                <div className='stepper'>
                    <i className='fa fa-id-card mx-3 stepper-item active'/>
                </div>
                <div class="stepper">
                    <i className={'fa fa-shield mx-3 stepper-item '+isActive()}/>
                </div>
            </div>
            <div style={{clear : "both"}} className='pt-2 mb-2'>
            {RenderMainForm()}
            </div>
            <small>Already registered ? <a className='partic-yellow-t' href='/login'>Login here</a></small>
        </div> 
    )
}