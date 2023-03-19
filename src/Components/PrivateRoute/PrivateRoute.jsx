import React, { Children } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({children}) {
  const {isLoggedIn} = useSelector((store)=>store.LoginSignupRed);

  if(!isLoggedIn) return <Navigate to='/login' />
  return children
}

