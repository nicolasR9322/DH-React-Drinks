import React from 'react'
import { Image, ListGroup } from 'react-bootstrap'
import propTypes from 'prop-types'
import useCart from '../../hooks/useCart'
import { types } from '../../types'

export const CartItem = ({drink}) => {

  const {strDrink, strDrinkThumb, price, quantity} = drink

  const {dispatch} = useCart();

  const handleAddItem = () => {
    dispatch({
      type : types.addItemToCart,
      payload : drink
    })
  }

  const handleRemoveItem = () => {
    dispatch({
      type : types.removeItemFromCart,
      payload : drink
    })
  }

  const handleRemoveAllItem = () => {
    dispatch({
      type : types.removeAllItems,
      payload : drink
    })
  }

  return (
    <ListGroup.Item className='d-flex gap-2'>
      <Image src={strDrinkThumb} width={"80px"} />
      <div style={{width:"100%"}}>
        <h6>{strDrink}</h6>
        <hr />
        <div className='d-flex justify-content-between'>
          <h5>${price * quantity}</h5>
          <div className='d-flex gap-2 align-items-center'>
            <button className='btn btn-sm btn-danger' onClick={handleRemoveItem}>
              <i className="fa-solid fa-minus"></i>
            </button>
            <input type="text" 
            style={{width:"50px"}} 
            value={quantity} 
            className='text-center'
            readOnly
            />
            <button className='btn btn-sm btn-success' onClick={handleAddItem}>
              <i className="fa-solid fa-plus"></i>
            </button>
            <h3 className='text-danger' onClick={handleRemoveAllItem} style={{cursor:"pointer"}}>
              <i className="fa-solid fa-trash-alt fa-lg"></i>
            </h3>
          </div>
        </div>
      </div>
    </ListGroup.Item>
  )
}

CartItem.propTypes = {
  drink : propTypes.shape({
    strDrink : propTypes.string,
    strDrinkThumb: propTypes.string,
    price : propTypes.number,
    quantity : propTypes.number
  })
}