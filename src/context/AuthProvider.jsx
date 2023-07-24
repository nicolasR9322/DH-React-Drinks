import {createContext, useEffect, useState} from 'react';
import propTypes from 'prop-types'
import { loginAuthService, profileUserService, toggleFavoriteService } from '../services/auth.service';
import jwtDecode from 'jwt-decode'
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    
    const [user,setUser] = useState(null);
    const [alert, setAlert] = useState(null)
    const [userProfile, setUserProfile] = useState(null)
    const [favorites, setFavorites] = useState([]);

    const navigate = useNavigate()

    useEffect(() => {
        const token = sessionStorage.getItem("drinksToken");

        if(token){
            const decodeToken = jwtDecode(token)
            setUser(decodeToken.user);
            setFavorites(user?.favorites);
        }

    }, []);

    const handleToggleFavorite = (idDrink) => {
        if(!favorites.includes(idDrink)){
            setFavorites([
                ...favorites,
                idDrink
            ])
        } else {
            setFavorites(favorites.filter(favorite => favorite !== idDrink))
        }

        toggleFavoriteService(idDrink);
    }

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
            setFavorites(decodeToken.user.favorites);

            navigate("/");
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
        setUserProfile({});
        setFavorites([]);
        sessionStorage.removeItem("drinksToken");
    }

    const contextValue = {
        user,
        login,
        logOut,
        alert,
        getProfile,
        userProfile,
        handleToggleFavorite,
        favorites
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