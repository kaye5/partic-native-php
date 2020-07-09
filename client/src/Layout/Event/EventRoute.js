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
function UserRoute(){
    return(
        <Switch>
            <Route exact path="/events">
                <Events />
            </Route>
            <Route exact path="/events/create" component={()=>(<Create />)} />
            <Route exact path="/events/my" component={()=>(<MyEvent />)} />
            <Route exact path="/events/manage/:id" component={(props)=>(<Manage {...props}/>)} />
            <Route exact path="/events/participant/:id" component={(props)=>(<Participant {...props}/>)} />
            <Route exact path="/events/:id" component={(props)=>(<Detail {...props}/>)}/>   
            <Route exact path="/events/:id/payment" component={()=>(<Payment/>)}/>
        </Switch>
    )
}

export default withRouter(UserRoute);
