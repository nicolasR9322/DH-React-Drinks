import { useState } from "react"
import { CartCanvas } from "../CartCanvas"
import styles from "./index.module.css"
import { Badge, Button } from "react-bootstrap"
import useCart from "../../hooks/useCart"

export const Header = () => {

  const [showCart, setShowCart] = useState(false)

  const handleShowCart = () => setShowCart(true)
  const handleCloseCart = () => setShowCart(false)

  const {cart} = useCart();

  return (
   <header className={`d-flex justify-content-around py-3 ${styles.header}`}>
    <h1>Search Drinks</h1>
    <div className="position-relative">
      <Button variant="outline-light" size="lg" onClick={handleShowCart}>
        <i className="fa-sharp fa-solid fa-cart-shopping"></i>
        <Badge className="position-absolute top-50 start-50" pill bg="warning">{cart.length}</Badge>
      </Button>
    </div>
    <CartCanvas showCart={showCart} handleCloseCart={handleCloseCart} />
   </header>
  )
}
