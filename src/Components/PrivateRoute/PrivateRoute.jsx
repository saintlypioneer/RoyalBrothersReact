import React, { Children } from 'react'
import { useSelector } from 'react-redux'
import { Navigate  } from 'react-router-dom';

export default function PrivateRoute({children}) {
  const {isLoggedIn} = useSelector((store)=>store.LoginSignupRed.useDetails);
  // const location = useLocation()
  

  //<<<<<<<<< Trying redirecting to last path >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


//<<<<<<<<< Ending Trying redirecting to last path >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  if(!isLoggedIn) return <Navigate to='/' />
  return children
}

