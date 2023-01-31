import React, { ReactNode } from 'react'
import { Redirect } from 'react-router-dom'
import { auth } from '../firebase/firebaseConfig'

type AuthRouteProps = {
  children: ReactNode
}

const AuthRoutes = ({children}:AuthRouteProps) => {
  if(!auth.currentUser){
    return(<Redirect to="/login"/>)
  }
  else return(<>{children}</>)
}

export default AuthRoutes