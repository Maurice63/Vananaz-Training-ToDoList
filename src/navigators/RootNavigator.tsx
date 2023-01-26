import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { protectedRoutes, routes,routesWithRedirect} from './Routes'

type Props = {

}

const RootNavigator = (props: Props) => {
  return (
    <Router>
      <Switch>
      {
        routesWithRedirect.map((route: any) => {return(
          <Route key={route.path} exact path={route.path}>
            <Redirect to={route.to} />
          </Route>
          )})
      }
    {
        routes.map((route: any) => {return(
            <Route key={route.path} path={route.path} component={route.component}/>
            )})
    } 
    {
        protectedRoutes.map((route: any) => {return(
            <Route key={route.path} path={route.path} component={route.component}/>
            )})
    }
    </Switch>
    </Router>
  )
}

export default RootNavigator