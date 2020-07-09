import React from 'react'
export default function Setting(){
    const [isEdit,setEdit] = React.useState(false)
    const [profile,setProf] = React.useState({
        name : 'Partic',
        email : 'Partic@partic.com'
    })
    const handleChange = (ev) => setProf({
        ...profile,
        [ev.target.name] : ev.target.value
    })
    return (
        <div>
            <div className="row">
                <div className="col-12 col-md-2" style={{fontSize:"5rem",textAlign:"center"}}>
                    <i className="fa fa-user-circle "></i>
                </div>
                <div className="col-12 col-md-8" style={{alignSelf : "center"}}>
                    {
                        isEdit ? 
                        <React.Fragment>
                            <input className='form-control mb-2' value={profile.name} name='name' type='text' onChange={handleChange}/>
                            <input className='form-control' value={profile.email} name='email' type='email' onChange={handleChange}/>
                            <button className='btn partic-btn partic-blue-bg px-4 mt-3' onClick={()=>setEdit(false)}>Save</button>
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
            <form>
                <h3 className="my-3">ACCOUNT INFORMATION</h3>

                <div className='row mb-3'>
                    <div className='col-12 col-md-6 pl-0'>
                        <label>Home Phone</label>
                        <input name='homePhone' type='tel' className='form-control'/>
                    </div>
                    <div className='col-12 col-md-6 pl-0'>
                        <label>Cell Phone</label>
                        <input name='Cell Phone' type='tel' className='form-control'/>
                    </div>
                </div>
                <div className='row mb-3'>
                    <div className='col-12 col-md-6 pl-0'>
                        <label>Job Title</label>
                        <input name='Job Title' type='text' className='form-control'/>
                    </div>
                    <div className='col-12 col-md-6 pl-0'>
                        <label>Company / Organization</label>
                        <input name='Company' type='text' className='form-control'/>
                    </div>
                </div>
                <div className='row mb-3'>
                    <div className='col-12 col-md-6 pl-0'>
                        <label>Website</label>
                        <input name='Website' type='text' className='form-control'/>
                    </div>
                    <div className='col-12 col-md-6 pl-0'>
                        <label>Blog</label>
                        <input name='blog' type='text' className='form-control'/>
                    </div>
                </div>
                
                <h2 className="my-3">HOME ADDRESS</h2>
                <div className='mb-3'>
                    <label>Address</label>
                    <input name='homeAddress' type='text' className='form-control'/>
                </div>
                <div className='mb-3'>
                    <label>Address 2</label>
                    <input name='homeAddress2' type='text' className='form-control'/>
                </div>
                <div className='mb-3'>
                    <label>Country</label>
                    <input name='homeCountry' type='text' className='form-control'/>
                </div>
                <div className='row mb-3'>
                    <div className='col-12 col-md-6 pl-0'>
                        <label>Zip / Postal Code</label>
                        <input name='homeZip' type='number' className='form-control' maxLength='5'/>
                    </div>
                    <div className='col-12 col-md-6 pl-0'>
                        <label>State</label>
                        <input name='homeState' type='text' className='form-control'/>
                    </div>
                </div>

                <h2 className="my-3">SHIPPING ADDRESS</h2>
                <div className='mb-3'>
                    <label>Address</label>
                    <input name='shipAddress' type='text' className='form-control'/>
                </div>
                <div className='mb-3'>
                    <label>Address 2</label>
                    <input name='shipAddress2' type='text' className='form-control'/>
                </div>
                <div className='mb-3'>
                    <label>Country</label>
                    <input name='shipCountry' type='text' className='form-control'/>
                </div>
                <div className='row mb-3'>
                    <div className='col-12 col-md-6 pl-0'>
                        <label>Zip / Postal Code</label>
                        <input name='shipZip' type='number' className='form-control' maxLength='5'/>
                    </div>
                    <div className='col-12 col-md-6 pl-0'>
                        <label>State</label>
                        <input name='shipState' type='text' className='form-control'/>
                    </div>
                </div>
                <button className='btn partic-btn partic-blue-bg mt-4 px-5 py-3'>Save</button>
            </form>
        </div>
    )
}