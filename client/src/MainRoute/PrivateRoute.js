import React from 'react'
import {Route} from 'react-router-dom'
import Auth from '../Modules/Auth'

const UserPrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
      Auth.isUserAuthenticated() ? (
        <Component {...props} {...rest} />
      ) : (
        window.location.href = '/login'
      )
    )}/>
  )

export {UserPrivateRoute};
