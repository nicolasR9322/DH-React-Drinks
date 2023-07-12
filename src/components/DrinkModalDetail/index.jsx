import {Button, Col, Image, Modal, Row} from 'react-bootstrap'
import useDrinks from '../../hooks/useDrinks';
import useCart from '../../hooks/useCart';
import { types } from '../../types';
import { getDrinkById } from '../../helpers';

export const DrinkModalDetail = () => {

    const {showModal, handleShowModalClick, recipe , drinks}= useDrinks()

    const { idDrink,strDrink,strDrinkThumb, strInstructions} = recipe;

    const showIngredients = () => {
        const ingredients = []
        for (let i = 1; i < 15; i++) {
            if(recipe[`strIngredient${i}`]){
                ingredients.push(
                    <li key={recipe[`strIngredient${i}`]}>
                        {recipe[`strIngredient${i}`]} | {recipe[`strMeasure${i}`]}
                    </li>
                )
            }
        }
        return ingredients;
    }


    const {dispatch} = useCart()

    const handleAddCart = () => {

        const drink = getDrinkById(drinks,idDrink)
        dispatch({
            type : types.addItemToCart,
            payload : drink
        })
    }


    return (  
        <>
          <Modal show={showModal} onHide={handleShowModalClick} size="xl">
            <Row>
                <Col>
                <Image src={strDrinkThumb} alt={`imagen de ${strDrink}`} fluid className='rounded-start' />
                </Col>
            
                <Col>
                <Modal.Header closeButton>
                <Modal.Title>{strDrink}</Modal.Title>
                </Modal.Header>
                <Modal.Body className='d-flex flex-column justify-content-between'>
                    <div>
                        <h4>Instrucciones</h4>
                        <p>{strInstructions}</p>
                        <h1>Ingredients & measures</h1>
                        <ul>
                            {showIngredients()}
                        </ul>
                    </div>
                    <Button variant={"danger"}
                    className='w-100 text-uppercase mt-2'
                    onClick={handleAddCart}
                    >
                        Comprar
                    </Button>
                </Modal.Body>
                </Col>
            </Row>
          </Modal>
        </>
        
      );
}
