import React from 'react';
import {
    Profile,Ticket
} from './';
import {
    Switch,
    Route,
    withRouter,
} from "react-router-dom";
function UserRoute(){
    return(
        <Switch>
            <Route exact path="/profile/ticket" component={()=> <Ticket />} />
                            
            <Profile />
            
        </Switch>
    )
}

export default withRouter(UserRoute);