import React, {useContext} from 'react';
import { Navigate } from 'react-router-dom';
import { NavContext } from './Index';

const ProtectedRoute = ({children}) => {
    const {isLoggedIn} = useContext(NavContext);
  return isLoggedIn ? children : <Navigate to='/'/>;
}

export default ProtectedRoute