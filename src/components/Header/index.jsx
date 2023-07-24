import { useState } from "react"
import { CartCanvas } from "../CartCanvas"
import styles from "./index.module.css"
import { Badge, Button } from "react-bootstrap"
import useCart from "../../hooks/useCart"
import { Link } from "react-router-dom"
import useAuth from "../../hooks/useAuth"

export const Header = () => {

  const [showCart, setShowCart] = useState(false)

  const handleShowCart = () => setShowCart(true)
  const handleCloseCart = () => setShowCart(false)

  const {cart} = useCart();
  const {user, logOut} = useAuth();

  const handleLogOut = () => {
    logOut()
  }

  return (
   <header className={`d-flex justify-content-between p-3 ${styles.header}`}>
    <Link to={"/"} className="nav-link">
      <h1>Search Drinks</h1>
    </Link>
    <div className="d-flex gap-2 align-items-center">

    {
      user ?(
      <div className="d-flex gap-2">
        <Link to={"/user/profile"} className="btn btn-lg btn-outline-light d-flex gap-2 align-items-end">
          <i className="fa-solid fa-user fa-lg"></i>
          <span>{user.name}</span>
        </Link>
        <Button onClick={handleLogOut} variant="outline-light" size="lg">
          <i className="fa-solid fa-sign-out fa-lg"></i>
        </Button>
      </div>)
      :(
        <>
        <Link to={"/login"} className="btn btn-lg btn-outline-light">
          <i className="fa-solid fa-right-to-bracket fa-lg"></i>
        </Link>
        <Link to={"/register"} className="btn btn-lg btn-outline-light">
          <i className="fa-solid fa-user fa-lg"></i>
        </Link>
        </>
      
    )}

    
    <div className="position-relative">
      <Button variant="outline-light" size="lg" onClick={handleShowCart}>
        <i className="fa-sharp fa-solid fa-cart-shopping"></i>
        <Badge className="position-absolute top-50 start-50" pill bg="warning">{cart.length}</Badge>
      </Button>
    </div>
    </div>
    <CartCanvas showCart={showCart} handleCloseCart={handleCloseCart} />
   </header>
  )
}


