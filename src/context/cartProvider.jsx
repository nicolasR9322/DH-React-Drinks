import { createContext, useReducer, useState } from "react"
import propTypes from 'prop-types'
import { cartReducer } from "../reducers/cartReducer"

const CartContext = createContext(null)

const init = () => {
    return JSON.parse(localStorage.getItem("cart")) || []
}

const CartProvider = ({children}) => {

    const [cart, dispatch] = useReducer(cartReducer, [], init)

    const contexValue = {
       cart,
       dispatch
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