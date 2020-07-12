import React from 'react';
import {
    Detail,Events,Payment
} from './';
import {
    Switch,
    Route,
    withRouter,
} from "react-router-dom";
import Create from './Create/Create';
import Manage from './Manage/Manage';
import MyEvent from './MyEvent/MyEvent';
import Participant from './Participant/Participant';
import {UserPrivateRoute} from '../../MainRoute/PrivateRoute'
function UserRoute(){
    return(
        <Switch>
            <Route exact path="/events">
                <Events />
            </Route>
            <UserPrivateRoute exact path="/events/create" component={()=>(<Create />)} />
            <UserPrivateRoute exact path="/events/my" component={()=>(<MyEvent />)} />
            <UserPrivateRoute exact path="/events/manage/:id" component={(props)=>(<Manage {...props}/>)} />
            <UserPrivateRoute exact path="/events/participant/:id" component={(props)=>(<Participant {...props}/>)} />
            <Route exact path="/events/:id" component={(props)=>(<Detail {...props}/>)}/>   
            <Route exact path="/events/:id/payment" component={(props)=>(<Payment {...props}/>)}/>
        </Switch>
    )
}

export default withRouter(UserRoute);
