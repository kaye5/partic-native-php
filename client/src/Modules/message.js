import React from 'react'
export default function Meesage({ data }) {
    const type = data.type
    const msg = data.msg
    const render = () => {
        switch (type) {
            case 'success':
                return (
                    <div className='alert alert-success' role='alert'>
                        {msg}
                    </div>
                )
            case 'error':
                return (
                    <div className='alert alert-danger' role='alert'>
                        {msg}
                    </div>
                )
            default:
                break
        }
    }
    return <div className='my-3'>{render()}</div>
}
