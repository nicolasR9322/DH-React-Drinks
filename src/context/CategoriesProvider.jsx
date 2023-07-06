import React, { createContext, useEffect, useState } from 'react'
import propTypes from 'prop-types'
import { getCategoriesService } from '../services/categories.service';

const CategoriesContext = createContext(null);

const CategoriesProvider = ({children}) => {
  
    const [categories, setCategories] = useState([]);


    const getCategories = async () => {
        try {
            const categoriesData = await getCategoriesService();

            setCategories(categoriesData);

        } catch (error) {
            console.error
        }
    }

    useEffect(() => {
        getCategories()
    }, [])

    const contextValue = {
        categories
    }

    return (
        <CategoriesContext.Provider value={contextValue}>
            {children}
        </CategoriesContext.Provider>
    )
  
CategoriesProvider.propTypes = {
    children : propTypes.node.isRequired
}
   
}

export {
    CategoriesProvider,
    CategoriesContext
}