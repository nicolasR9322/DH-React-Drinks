import { createContext, useState } from "react"
import propTypes from 'prop-types'
import useDrinks from "../hooks/useDrinks";

const CartContext = createContext(null)

const CartProvider = ({children}) => {

    

    const [cart, setCart] = useState([]);

    const {drinks} = useDrinks();
    

    const addCart = (idDrink) => {


        let drinkItemCart = drinks.find(drink => drink.idDrink === idDrink);

        const countIngredients = (drink) => {
            let count = 0
            for (let i = 1; i < 15; i++) {
                if(recipe[`strIngredient${i}`]){
                    count++
                }
            }
            return count;
        }

        drinkItemCart = {
            ...drinkItemCart,
            price : countIngredients(drinkItemCart) * 2
        }

        setCart([...cart, drinkItemCart])
    }

    const contexValue = {
        cart
    }

  return (
    <CartContext.Provider value={contexValue}>
        {children}
    </CartContext.Provider>
  )
}

CartProvider.propTypes ={
    children: propTypes.node.isRequired
}

export {
    CartProvider,
    CartContext
}