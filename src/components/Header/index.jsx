import { useState } from "react"
import { CartCanvas } from "../CartCanvas"
import styles from "./index.module.css"
import { Button } from "react-bootstrap"

export const Header = () => {

  const [showCart, setShowCart] = useState(false)

  const handleShowCart = () => setShowCart(true)
  const handleCloseCart = () => setShowCart(false)

  return (
   <header className={`d-flex justify-content-around py-3 ${styles.header}`}>
    <h1>Search Drinks</h1>
    <Button variant="outline-light" size="lg" onClick={handleShowCart}>
    <i className="fa-sharp fa-solid fa-cart-shopping"></i>
    </Button>
    <CartCanvas showCart={showCart} handleCloseCart={handleCloseCart} />
   </header>
  )
}
