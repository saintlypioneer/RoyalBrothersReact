import React, { Children } from 'react'
import { useSelector } from 'react-redux'
import { Navigate,useLocation  } from 'react-router-dom';

export default function PrivateRoute({children,...rest}) {
  const {isLoggedIn} = useSelector((store)=>store.LoginSignupRed);
  const location = useLocation()
  

  //<<<<<<<<< Trying redirecting to last path >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


//<<<<<<<<< Ending Trying redirecting to last path >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  if(!isLoggedIn) return <Navigate to='/' />
  return children
}

