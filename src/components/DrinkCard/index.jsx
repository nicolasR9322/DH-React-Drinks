import { Button, Card, Col } from 'react-bootstrap'
import propTypes from 'prop-types'
import useDrinks from '../../hooks/useDrinks'
import styles from './index.module.css'
import useCart from '../../hooks/useCart'


export const DrinkCard = ({drink}) => {
    
    const {strDrinkThumb, strDrink, idDrink} = drink
    

    const {
        handleDrinkIdClick, 
        handleShowModalClick, 
        drinks, 
        recipe } = useDrinks();


    /* const [addCart] = useCart() */

  return (
    <Col md={6} lg={3}>
        <Card className='mb-4'>
            <Card.Img variant='top' src={strDrinkThumb} alt={`imagen de ${strDrink}`}/>
        <Card.Body>
            <Card.Title className={styles.strDrink}>
                {strDrink}
            </Card.Title>
            <Button variant={"warning"}
            className='w-100 text-uppercase mt-2'
            onClick={() => {
                handleDrinkIdClick(idDrink)
                handleShowModalClick()
                
            }}
            >
                Ver receta
            </Button>
            <Button variant={"danger"}
            className='w-100 text-uppercase mt-2'
            onClick={() => {
                handleDrinkIdClick(idDrink)
                handleShowModalClick()
            }}
            >
                Comprar
            </Button>
        </Card.Body>
        </Card>
    </Col>
  )
}

DrinkCard.propTypes = {
    drink : propTypes.object.isRequired,
    strDrinkThumb: propTypes.string.isRequired,
    strDrink: propTypes.string.isRequired
}