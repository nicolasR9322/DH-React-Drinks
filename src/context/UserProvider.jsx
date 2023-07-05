import {createContext, useState} from 'react';

import propTypes from 'prop-types'

const userContext = createContext(null);

const UserProvider = ({children}) => {
    
    const [user,setUser] = useState(null);
    
    const login = () => {
        setUser("nico");
    }

    const logOut = () => {
        setUser(null);
    }

    const contextValue = {
        user,
        login,
        logOut
    }
    return (
        <userContext.Provider value={contextValue}>
            {children}
        </userContext.Provider>
        )
}

UserProvider.propTypes = {
    children: propTypes.node.isRequired
}

export {
    userContext,
    UserProvider
}