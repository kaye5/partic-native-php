import React from 'react';
import {
    Profile,Ticket
} from './';
import {
    Switch,
    withRouter,
} from "react-router-dom";
import {UserPrivateRoute} from '../../MainRoute/PrivateRoute'
function UserRoute(){
    return(
        <Switch>
            <UserPrivateRoute exact path="/profile" component={()=> window.location.href = '/profile/setting'} />
            <UserPrivateRoute exact path="/profile/ticket" component={()=> <Ticket />} />
            <Profile />            
        </Switch>
    )
}

export default withRouter(UserRoute);