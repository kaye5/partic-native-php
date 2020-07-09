import React from 'react';
import Profile from './Profile'
export default class NavBar extends React.Component {
    state = {
        login : false,
        open : false,
    }
    isLinkActive(path){
        if(window.location.pathname === path)
            return "nav-item active"
        else 
            return "new-item"
    }
    
    render(){
        return(
            <header className="shadow p-2 mb-3 bg-white rounded">                
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="/" style={{fontFamily : 'Montserrat-Black'}}>Partic.</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                        <li className={this.isLinkActive('/home')}>
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className={this.isLinkActive('/contact-us')}>
                            <a className="nav-link" href="/contact-us">Contact us</a>
                        </li>
                        <li className={this.isLinkActive('/events')}>
                            <a className="nav-link" href="/events">Discover Event</a>
                        </li>
                        <li className={this.isLinkActive('/events/create')}>
                            <a className="nav-link" href="/events/create"><button className="post-btn">Post Event</button></a>
                        </li>
                        <li className="nav-item">
                            <Profile />                                                        
                        </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}