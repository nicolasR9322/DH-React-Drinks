import { Button, Card, Col } from 'react-bootstrap'
import propTypes from 'prop-types'
import useDrinks from '../../hooks/useDrinks'
import styles from './index.module.css'
import useCart from '../../hooks/useCart'
import { types } from '../../types'
import Swal from 'sweetalert2'
import useAuth from '../../hooks/useAuth'

export const DrinkCard = ({drink}) => {
    
    const {strDrinkThumb, strDrink, idDrink} = drink
    

    const {
        handleDrinkIdClick
    } = useDrinks();

    const {handleToggleFavorite, favorites, user} = useAuth()

    const {dispatch} = useCart()

    const handleAddCart = () => {
        dispatch({
            type : types.addItemToCart,
            payload : drink
        });
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Bebida agregada al carrito',
            showConfirmButton: false,
            timer: 1500
          })
    };

    const handleFavorite = () => {
        user ? 
        handleToggleFavorite(idDrink)
        :
        Swal.fire({
            icon: 'error',
            title: 'debes estar logueado',
          })
    }

  return (
    <Col md={6} lg={3}>
        <Card className='mb-4'>
            <Card.Img variant='top' src={strDrinkThumb} alt={`imagen de ${strDrink}`}/>
        <Card.Body>
            <Card.Title className={styles.strDrink}>
                {strDrink}
            </Card.Title>
            <a 
            style={{cursor:"pointer"}} 
            className='text-danger' 
            onClick={handleFavorite}
            >
                {
                    favorites.includes(idDrink) ? (
                        <i className='fas fa-heart fa-lg'></i>
                    ):
                        (<i className='far fa-heart fa-lg'></i>)
                }
            </a>
            <Button variant={"warning"}
            className='w-100 text-uppercase mt-2'
            onClick={() => {
                handleDrinkIdClick(idDrink)
            }}
            >
                Ver receta
            </Button>
            <Button variant={"danger"}
            className='w-100 text-uppercase mt-2'
            onClick={handleAddCart}
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

DrinkCard.defaultProps = {
    strDrinkThumb: "https://www.infobae.com/new-resizer/sptAX0gjl1hRA9vQlCSJRPF0nRg=/1090x768/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/6E3JQQVWGVHNNBABSIAXBKJ7U4.png",
    strDrink: "Nombre de la bebida"
}