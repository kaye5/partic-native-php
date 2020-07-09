import React from 'react'
import './Register.css'
import { Redirect } from 'react-router-dom'
import '../../Modules/Auth'
import Auth from '../../Modules/Auth'
import instance from '../../Modules/instances'
import Message from '../../Modules/message'
export default function Register() {
    const [password, setPassword] = React.useState({})
    const [data, setData] = React.useState({
        gender : 'male'
    })
    const [msg, setMsg] = React.useState({
        type: '',
        msg: ''
    })
    const [level, setLevel] = React.useState(1)

    const handleNext = (ev) => {
        ev.preventDefault()
        setLevel(2)
    }
    const handleRegister = async (ev) => {
        ev.preventDefault()
        if (password.password !== password.confirmPass)
            setMsg({
                type: 'error',
                msg: 'Password not match'
            })
        else {
            try {
                let form = new FormData()
                for (let key in data) {
                    form.set(key, data[key])
                }
                form.set('password', password.password)
                let res = await instance.post('/user/registeruser.php', form)
                console.log(res.data)
                if(res.data === 'duplicate')
                    return setMsg({
                        type: 'error',
                        msg: 'Alredy Registered'
                    })
                else if (res.data === 'OK')               
                    return setMsg({
                        type : 'success'
                    })
            } catch (err) {
                setMsg({
                    type: 'error',
                    msg: 'something went wrong'
                })
            }
            Auth.authenticateUser()
        }
    }
    const handleChangePass = (ev) => {
        setPassword({ ...password, [ev.target.name]: ev.target.value })
    }
    const handleChange = (ev) => {
        setData({...data, [ev.target.name]: ev.target.value })
    }
    const handleCancle = (ev) => {
        ev.preventDefault()
        setMsg({type : '' , msg : ''})
        setLevel(1)
    }
    function renderProfileForm() {
        return (
            <form onSubmit={handleNext}>
                <div className='text-left'>
                    <div className='my-5'>
                        <div className='my-3'>
                            <label>Full name</label>
                            <input
                                name='name'
                                className='form-control'
                                placeholder='Fullname'
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div className='my-3'>
                            <label>Email</label>
                            <input
                                name='email'
                                className='form-control'
                                placeholder='Email'
                                type='email'
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div className='my-3'>
                            <label>Phone number</label>
                            <input
                                name='phone'
                                className='form-control'
                                placeholder='Phone number'
                                type='tel'
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div className='my-3'>
                            <label>Gender</label>
                            <select
                                className='form-control'
                                name='gender'
                                onChange={handleChange}>
                                <option value='male'>Male</option>
                                <option value='female'>Female</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div>
                    <button
                        className='btn partic-btn partic-yellow-bg py-2'
                        style={{ width: '50%' }}>
                        Next
                    </button>
                </div>
            </form>
        )
    }
    function renderSecurityForm() {
        return (
            <form onSubmit={handleRegister}>
                <div className='text-left'>
                    <div>
                        <div className='my-5'>
                            <div className='my-3'>
                                <label>Password</label>
                                <input
                                    name='password'
                                    className='form-control'
                                    type='password'
                                    onChange={handleChangePass}
                                    required
                                />
                            </div>
                            <div className='my-3'>
                                <label>Re-enter password</label>
                                <input
                                    name='confirmPass'
                                    className='form-control'
                                    type='password'
                                    onChange={handleChangePass}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {<Message data={msg} />}
                <div>
                    <button
                        className='btn partic-btn partic-blue-bg py-3 mr-3'
                        style={{ width: '45%' }}
                        onClick={handleCancle}>
                        Cancle
                    </button>
                    <button
                        className='btn partic-btn partic-yellow-bg py-3'
                        style={{ width: '45%' }}>
                        Submit
                    </button>
                </div>
            </form>
        )
    }
    function RenderMainForm() {
        if (level === 1) return renderProfileForm()
        else return renderSecurityForm()
    }
    function isActive() {
        if (level === 2) return 'active'
        else return ''
    }
    return (
        <div className='container text-center'>
            {msg.type === 'success' && <Redirect to='/login' />}
            <h2>Register</h2>
            <div id='stepProgressBar' className='mt-5'>
                <div className='stepper'>
                    <i className='fa fa-id-card mx-3 stepper-item active' />
                </div>
                <div className='stepper'>
                    <i
                        className={
                            'fa fa-shield mx-3 stepper-item ' + isActive()
                        }
                    />
                </div>
            </div>
            <div style={{ clear: 'both' }} className='pt-2 mb-2'>
                {RenderMainForm()}
            </div>
            <small>
                Already registered ?{' '}
                <a className='partic-yellow-t' href='/login'>
                    Login here
                </a>
            </small>
        </div>
    )
}
