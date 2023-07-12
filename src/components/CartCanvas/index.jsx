import { ListGroup, Offcanvas } from "react-bootstrap"
import propTypes from 'prop-types'
import useCart from "../../hooks/useCart"
import { CartItem } from "../cartItem"


export const CartCanvas = ({showCart, handleCloseCart}) => {
  
  const {cart} = useCart()
  
  return (
    <Offcanvas show={showCart} onHide={handleCloseCart} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title> Mi Carrito</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup>
            {
              cart.length ?
              (
                cart.map(drink => <CartItem key={drink.idDrink} drink={drink}/>)
              )
              :
              <p>No hay productos agregados</p>
            }
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
  )
}

CartCanvas.propTypes = {
    showCart : propTypes.bool,
    handleCloseCart : propTypes.func
}