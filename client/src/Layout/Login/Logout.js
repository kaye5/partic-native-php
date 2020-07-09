import React from 'react'
import { Redirect } from 'react-router-dom';
import Auth from '../../Modules/Auth'
const handleLogout = () =>{
    Auth.deauthenticateUser();
}
export default function Logout(){
    return (
        <React.Fragment>
            {handleLogout()}
            <Redirect to="/home" />
        </React.Fragment>
    )
}