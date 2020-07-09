import React from 'react';
import {
    Profile,Ticket
} from './';
import {
    Switch,
    Route,
    BrowserRouter as Router,
    withRouter,
} from "react-router-dom";
function UserRoute(){
    return(
        <Switch>
            <Route exact path="/profile/ticket" component={()=> <Ticket />} />
            <Router>                
                <Profile />
            </Router>
        </Switch>
    )
}

export default withRouter(UserRoute);