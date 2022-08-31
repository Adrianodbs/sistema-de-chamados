import { Switch } from 'react-router-dom'
import Route from './Route'

import SignIn from '../pages/Signin'
import SignUp from '../pages/Signup'
import Dashboard from '../pages/Dashboard'
import Profile from '../pages/Profile'
import Customers from '../pages/Customers'

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/register" component={SignUp} />

      <Route exact path="/dashboard" component={Dashboard} isPrivate />
      <Route exact path="/profile" component={Profile} isPrivate />
      <Route exact path="/customers" component={Customers} isPrivate />
    </Switch>
  )
}
