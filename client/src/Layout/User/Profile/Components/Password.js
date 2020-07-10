import React from 'react'
import Modal from "@material-ui/core/Modal";
import instance from '../../../../Modules/instances';
import Message from '../../../../Modules/message';
export default function Password(){
    const [modal,setModal] = React.useState(false)
    const [msg,setMsg] = React.useState({type : '', msg : ''})
    const [profile,setProfile] = React.useState({
        password : '',
        currPassword  : '',
        newPassword : '',
        confirmPassword : '',
    })
    const handleChange = (ev) => {
        setProfile({...profile, [ev.target.name] : ev.target.value})
    }
    React.useState(()=>{
        instance.get('/user/getprofile.php').then((res)=>{
            setProfile(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])
    const handleSaveProfile = (ev) => {
        ev.preventDefault();        
        if(profile.password === profile.currPassword && profile.newPassword === profile.confirmPassword){
            let data = profile
            data.password = profile.confirmPassword
            instance.post('/user/updateuser.php',data).then(res=>{
                console.log(res.data);
                if(res.data === 'OK')
                    setModal(true)
            }).catch(err =>{
                console.log(err)
                setMsg({
                    type : 'error',
                    msg : err
                })
            })
        } else 
            setMsg({
                type : 'error',
                msg : 'Password mismatch'
            })
    }

    return (        
        <div className='container'>
            <h3 className="my-3">Change Password</h3>

            <div className='mb-3'>
                <label>Current Password</label>
                <input name='currPassword' type='password' className='form-control' onChange={handleChange}/>
            </div>
            <div className='mb-3'>
                <label>New Password</label>
                <input name='newPassword' type='password' className='form-control' onChange={handleChange}/>
            </div>
            <div className='mb-3'>
                <label>Confirm Password</label>
                <input name='confirmPassword' type='password' className='form-control' onChange={handleChange}/>
            </div>
            <Message data={msg}/>
            <button className='btn partic-btn partic-blue-bg mt-4 px-5 py-3'  onClick={handleSaveProfile}>Change Password</button>
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