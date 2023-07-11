import { useContext } from "react"
import { CartContext } from "../context/cartProvider"

const useCart = () => useContext(CartContext)


export default useCart