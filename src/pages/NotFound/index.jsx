import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <Container style={{backgroundColor:"red"}}>
        <Row>
            <Col md={6} className='mx-auto'>
                <h1 className='text-center text-white'>404</h1>
                <p className='text-center text-white'>Page not NotFound</p>
                <Link to={"/"}> Volver al inicio
                </Link>
            </Col>
        </Row>
    </Container>
    )
}
