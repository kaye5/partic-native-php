import React from 'react'
import instance from '../../../../Modules/instances'
import Message from '../../../../Modules/message'
export default function Setting(){
    const [isEdit,setEdit] = React.useState(false)
    const [profile,setProf] = React.useState({
        name : 'Partic',
        email : 'Partic@partic.com',
        phone : '',
        country : '',
        company : '',
        website : '',
        blog : '',
        job : '',
        instagram : ''
    })
    const [msgProfile,setMsgProfile] = React.useState({
        type : '',
        msg : '',
    })

    const handleChange = (ev) => setProf({
        ...profile,
        [ev.target.name] : ev.target.value
    })

    const handleSaveProfile = (ev) => {
        try{
            ev.preventDefault();
        } catch(err){

        }
        setEdit(false)
        instance.post('/user/updateuser.php',profile).then(res=>{
            console.log(res.data);
            if(res.data === 'OK')
                setMsgProfile({
                    type : 'success',
                    msg : res.data
                })
        }).catch(err =>{
            console.log(err)
            setMsgProfile({
                type : 'error',
                msg : err
            })
        })
    }

    React.useState(()=>{
        instance.get('/user/getprofile.php').then((res)=>{
            setProf(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[msgProfile.type])
    return (
        <div>
            <div className="row">
                <div className="col-12 col-md-2" style={{fontSize:"5rem",textAlign:"center"}}>
                    <i className="fa fa-user-circle "></i>
                </div>
                <div className="col-12 col-md-8" style={{alignSelf : "center"}}>
                    <Message data={msgProfile}/>
                    {
                        isEdit ? 
                        <React.Fragment>
                            <input className='form-control mb-2' value={profile.name} name='name' type='text' onChange={handleChange}/>
                            <input className='form-control' value={profile.email} name='email' type='email' onChange={handleChange}/>
                            <button className='btn partic-btn partic-blue-bg px-4 mt-3' onClick={()=>handleSaveProfile()}>Save</button>
                        </React.Fragment>
                        : 
                        <React.Fragment>
                            <h4 className="profile-edit" onClick={()=>setEdit(true)}>{profile.name} <i className='fa fa-edit ml-2'/></h4>
                            <h6 className="profile-edit" onClick={()=>setEdit(true)}>{profile.email} <i className='fa fa-edit ml-2'/></h6>
                        </React.Fragment>
                    }             
                </div>
            </div>
            <div className='dropdown-divider my-4'/>
            <form onSubmit={handleSaveProfile} >
                <h3 className="my-3">ACCOUNT INFORMATION</h3>

                <div className='row mb-3'>
                    <div className='col-12 col-md-6 pl-0'>
                        <label>Cell Phone</label>
                        <input name='phone' type='tel' className='form-control' value={profile.phone} onChange={handleChange} />
                    </div>
                    <div className='col-12 col-md-6 pl-0'>
                        <label>instagram</label>
                        <input name='instagram' type='tel' className='form-control' onChange={handleChange} value={profile.instagram}/>
                    </div>
                </div>
                <div className='row mb-3'>
                    <div className='col-12 col-md-6 pl-0'>
                        <label>Job Title</label>
                        <input name='job' type='text' className='form-control' onChange={handleChange} value={profile.job}/>
                    </div>
                    <div className='col-12 col-md-6 pl-0'>
                        <label>Company / Organization</label>
                        <input name='company' type='text' className='form-control' onChange={handleChange} value={profile.company}/>
                    </div>
                </div>
                <div className='row mb-3'>
                    <div className='col-12 col-md-6 pl-0'>
                        <label>Website</label>
                        <input name='website' type='text' className='form-control' onChange={handleChange} value={profile.website}/>
                    </div>
                    <div className='col-12 col-md-6 pl-0'>
                        <label>Blog</label>
                        <input name='blog' type='text' className='form-control' onChange={handleChange} value={profile.blog}/>
                    </div>
                </div>
                <Message data={msgProfile}/>
                <button className='btn partic-btn partic-blue-bg mt-4 px-5 py-3' type='submit'>Save</button>
            </form>
        </div>
    )
}