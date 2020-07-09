import React from 'react'

export default function Contact(){
    return (
        <div className='row'>
            <div className='col-12 col-md-6'>
                <h1>Contact Us</h1>
                <div className='my-5'>
                    <div className='my-3'>
                        <label>Full name</label>
                        <input name='name' className='form-control' placeholder='Fullname'/>
                    </div>
                    <div className='my-3'>
                        <label>Email</label>
                        <input name='email' className='form-control' placeholder='Email' type='email'/>
                    </div>
                    <div className='my-3'>
                        <label>Phone number</label>
                        <input name='phone' className='form-control' placeholder='Phone number' type='tel'/>
                    </div>
                    <div className='my-3'>
                        <label>Message</label>
                        <textarea name='message' className='form-control textarea' placeholder='Your message' maxLength='300'/>
                    </div>                    
                </div>
                <button className='btn partic-btn partic-yellow-bg py-3 px-4'>Submit</button>
            </div>
            <div className='col-12 col-md-6 mt-5 contact-info'>
                <div>
                    <h4>E-mail</h4>
                    <p>Partic@partic.com</p>
                </div>
                <div>
                    <h4>Head office</h4>
                    <p>UPH Medan Campus</p>
                </div>
                <div className='mt-5'>
                    <h5>Special thanks to website prototype designer</h5>
                    <p><a href='https://www.instagram.com/kevinfericco/'><i className='fa fa-instagram mr-3' style={{fontSize:'2rem',color:'black'}}/></a> Kevin Fericco</p>
                </div>
            </div>
        </div>
    )
}