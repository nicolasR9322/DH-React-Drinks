import React from 'react'
import useAuth from '../hooks/useAuth'
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoutes = () => {
  
    const {user} = useAuth();
    return user ? 
    <Outlet /> 
    : 
    <Navigate to={"/login"} replace />
    // <Route path='/profile' element={<Profile />} />

}
