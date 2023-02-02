import React, { ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { selectAllUsers } from '../redux/features/User'

type AuthRouteProps = {
  children: ReactNode
}

const AuthRoutes = ({children}:AuthRouteProps) => {
  const user = useSelector(selectAllUsers)
  if(user === ""){
    return(<Redirect to="/login"/>)
  }
  else return(<>{children}</>)
}

export default AuthRoutes