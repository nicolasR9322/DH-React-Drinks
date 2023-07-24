import {createContext, useState} from 'react';
import propTypes from 'prop-types'
import { loginAuthService, profileUserService } from '../services/auth.service';
import jwtDecode from 'jwt-decode'

const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    
    const [user,setUser] = useState(null);
    const [alert, setAlert] = useState(null)
    const [userProfile, setUserProfile] = useState(null)

    const handleAlert = (error) => {
        setAlert(error.message),
        setTimeout(() => {
            setAlert(null)
        }, 3000);
    }

    const login = async (info) => {
        try {
            const {token} = await loginAuthService(info);
            sessionStorage.setItem("drinksToken", token)
            const decodeToken = token ? jwtDecode(token) : null
           
            
            setUser(decodeToken.user);

        } catch (error) {
            // console.log(error)
            handleAlert(error)
        }
    }

    const getProfile = async () => {
        try {
            const token = sessionStorage.getItem("drinksToken")
            
            if(!token){
                return null
            }

            const response = await profileUserService(token)

           console.log(response);

           setUserProfile(response.user)
        } catch (error) {
            handleAlert(error)
            
        }
    }

    const logOut = () => {
        setUser(null);
    }

    const contextValue = {
        user,
        login,
        logOut,
        alert,
        getProfile,
        userProfile
    }
    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
        )
}

AuthProvider.propTypes = {
    children: propTypes.node.isRequired
}

export {
    AuthContext,
    AuthProvider
}