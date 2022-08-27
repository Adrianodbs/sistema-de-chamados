import { Switch } from 'react-router-dom'
import Route from './Route'

import SignIn from '../pages/Signin'
import SignUp from '../pages/Signup'
import Dashboard from '../pages/Dashboard'

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/register" component={SignUp} />

      <Route exact path="/dashboard" component={Dashboard} isPrivate />
    </Switch>
  )
}
