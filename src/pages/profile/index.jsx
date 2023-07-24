import React, { useEffect } from 'react'
import useAuth from '../../hooks/useAuth';

export const Profile = () => {

    const {userProfile, getProfile} = useAuth();
    
    useEffect(() => {
       getProfile()
    }, []);
    
  return (
    
        userProfile && (

            <div>
                <h2>{userProfile.name}</h2>
                <hr />
                <h3>{userProfile.email}</h3>
            </div>
         ) 
  )
}
