import { createContext, useEffect, useState } from "react"
import propTypes from 'prop-types'
import { filterDrinksService, getRecipeService } from "../services/drinks.service";

const DrinksContext = createContext(null);

const DrinksProvider = ({children}) => {

    const [drinks, setDrinks] = useState ([]);
    const [loading, setLoading] = useState(false);
    const [recipe, setRecipe] = useState([]);
    const [idDrink, setIdDrink] = useState(null);
    const [showModal, setShowModal] = useState(false)

    const getDrinks = async (data) => {
        try {

            const {ingredient, category} = data
            
            setLoading(true)
            const drinksData = await filterDrinksService(ingredient, category);

            setDrinks(drinksData);
            
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }   

    useEffect(() => {   
        const getRecipe = async () => {
            if (!idDrink) return
                setLoading(true);

                const recipeData = await getRecipeService(idDrink);
                
                setRecipe(recipeData);
                
                setShowModal((show)=> !show)
            try {

                setLoading(true)

                const recipeData = await getRecipeService(idDrink);

                setRecipe(recipeData);

            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false)
            }
        };
        getRecipe()
    }, [idDrink])


    const handleDrinkIdClick = (id) => {
        setIdDrink(id)
    }

    const handleShowModalClick = () => {
        setShowModal((show) => !show)
    }

    const contextValue = {
        drinks,
        getDrinks,
        loading,
        handleDrinkIdClick,
        recipe,
        showModal,
        handleShowModalClick,
    }




  return (
    <DrinksContext.Provider value={contextValue}>
        {children}
    </DrinksContext.Provider>
  )
}

DrinksProvider.propTypes = {
    children: propTypes.node.isRequired
}

export {
    DrinksContext,
    DrinksProvider,
}