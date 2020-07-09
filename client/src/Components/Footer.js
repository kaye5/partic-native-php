import React from 'react';
import './Footer.css';
export default class Footer extends React.Component {
    render(){
        return(
            <footer className="footer">
                <div className="container px-4">
                    <div className="row mt-5 mb-5" style={{margin : 0}}>                        
                        <h1 style={{fontWeight : "bold"}}>Partic.</h1>                        
                    </div>
                    <div className="row ft-l">
                        <a href="/home">Home</a>
                    </div>
                    <div className="row ft-l">
                        <a href="/login">Login</a>
                    </div>
                    <div className="row ft-l">
                    <a href="/register">Register</a>
                    </div>
                    <div className="row ft-l">
                        <a href="/contact-us">About Us</a>
                    </div>
                    <div className="row mt-5 cpf partic-grey-t">
                        © Copyright 2020 Partic 
                    </div>
                </div>
            </footer>
        )
    }
}