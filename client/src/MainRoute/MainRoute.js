import React from 'react';
import User from '../Layout/User/User';
import Home from '../Layout/Home/Home';
import Contact from '../Layout/Home/Contact';
import Login from '../Layout/Login/Login';
import Logout from '../Layout/Login/Logout';
import Register from '../Layout/Login/Register';
import Event from '../Layout/Event/Event'
import {
    Switch,
    Route,
    BrowserRouter as Router,
    withRouter,
    Redirect,
} from "react-router-dom";
import Forgot from '../Layout/Login/Forgot';
function MainRoute(){
    return(
        <Switch>
            <Route exact path="/" component={()=><Redirect to="/home"/>}/>
            <Route path="/login" component={(props)=><Login {...props}/>} />
            <Route path="/logout" component={() => <Logout />} />
            <Route path="/register" component={() => <Register />} />
            <Route path="/forgot" component={() => <Forgot/>} />
            <Route exact path="/home">
                <Home />
            </Route>
            <Route exact path="/contact-us">
                <Contact />
            </Route>
            <Router path="/events">
                <Event />
            </Router>
            <Router path="/profile">
                <User />
            </Router>
            
        </Switch>
    )
}

export default withRouter(MainRoute);