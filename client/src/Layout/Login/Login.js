import React, { Component } from 'react'
import Modal from '@material-ui/core/Modal'
import Auth from '../../Modules/Auth'
import Message from '../../Modules/message'
import instance from '../../Modules/instances'
export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modal: true,
            close: false,
            isLog: false,
            status: {
                type: '',
                msg: ''
            },
            data: new FormData()
        }
    }
    handleChange(ev) {
        this.state.data.set(ev.target.name, ev.target.value)
    }
    onCLose() {
        try{
            let url = new URL(document.referrer)
            if(url.pathname === '/register')
                return window.location.href = '/home'
            if(url.hostname !== window.location.hostname)
                return window.location.href = '/home'
            return window.history.back();
        }catch(err){
            window.location.href = '/home'
        }
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal,
            close: true
        })
    }
    async onLogin(e) {
        e.preventDefault()
        try {
            let res = await instance.post('/user/login.php', this.state.data)
            if(res.data){
                Auth.authenticateUser(res.data)
                this.setState({
                    modal: false,
                    close: true
                })
            } else throw new Error("Wrong Password")
        } catch (error) {
            this.setState({
                status: { type: 'error', msg: 'incorrect password' }
            })
        }
    }
    render() {
        return (
            <React.Fragment>
                {this.state.close && this.onCLose()}
                <Modal
                    aria-labelledby='simple-modal-title'
                    aria-describedby='simple-modal-description'
                    disableScrollLock={false}
                    open={this.state.modal}
                    onClose={this.toggle}>
                    <div
                        className='modal-dialog'
                        role='document'
                        style={{ textAlign: 'center', top: '15%' }}>
                        <div className='modal-content'>
                            <div className='modal-body'>
                                <h1>
                                    <b>Login</b>
                                </h1>
                                <form
                                    style={{ textAlign: 'left' }}
                                    onSubmit={(e) => this.onLogin(e)}>
                                    <div className='form-group'>
                                        <label>
                                            <b>Username</b>
                                        </label>
                                        <input
                                            onChange={(ev) =>
                                                this.handleChange(ev)
                                            }
                                            type='email'
                                            className='form-control'
                                            name='email'
                                            id='InputEmail1'
                                            aria-describedby='emailHelp'
                                            placeholder='Enter email'
                                            required
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label>
                                            <b>Password</b>
                                        </label>
                                        <input
                                            onChange={(ev) =>
                                                this.handleChange(ev)
                                            }
                                            type='password'
                                            className='form-control'
                                            id='InputPassword1'
                                            placeholder='Password'
                                            name='password'
                                            required
                                        />
                                    </div>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <input
                                                type='checkbox'
                                                className='form-check-input'
                                                id='Check1'
                                            />
                                            <label className='form-check-label'>
                                                Remmember password
                                            </label>
                                        </div>
                                        <div className='col-6 text-right'>
                                            <a
                                                href='/forgot'
                                                style={{ color: 'black' }}>
                                                <span>
                                                    <u>Forgot password?</u>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                    <div
                                        style={{ textAlign: 'center' }}
                                        className='my-4'>
                                        <button
                                            type='submit'
                                            className='btn partic-btn partic-yellow-bg'
                                            style={{ width: '25%' }}>
                                            Submit
                                        </button>
                                        {this.state.status && (
                                            <Message data={this.state.status} />
                                        )}
                                    </div>
                                </form>
                                <small className='text-muted'>
                                    Not a user?{' '}
                                    <a
                                        href='/register'
                                        style={{ color: 'black' }}>
                                        <u>Sign up here</u>
                                    </a>
                                </small>
                            </div>
                        </div>
                    </div>
                </Modal>
            </React.Fragment>
        )
    }
}
