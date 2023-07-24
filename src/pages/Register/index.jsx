import {Formik, Field, ErrorMessage} from 'formik'
import {Form,Row,Col, Button} from 'react-bootstrap'
import * as Yup from 'yup'
import { registerAuthService } from '../../services/auth.service'
import { useNavigate } from 'react-router-dom'

export const Register = () => {

  const navigate = useNavigate()

  const initialValues = {
    name :"",
    email: "",
    password : ""
  }
  
const validationSchema = Yup.object({
  name : Yup.string().required("el nombre es obligatorio"),
  email: Yup.string().required("el email es requerido"),
  password: Yup.string().required("el password es requerido"),
})

  const handleSubmit = async (values) => {
    const response = await registerAuthService(values)

    console.log(response);

    navigate("/login")
  }

  return (
    <Formik 
    initialValues={initialValues}
    onSubmit={handleSubmit}
    validationSchema={validationSchema}
    >

    {
      (formik) => (
        <Form onSubmit={formik.handleSubmit} className='col-6 mx-auto'>
          
              <Form.Group>
                <Form.Label htmlFor='name'>Nombre: </Form.Label>
                <Field
                    id="name"
                    type="text"
                    placeholder="escribe tu nombre"
                    name="name"
                    as={Form.Control} 
                  />
                <ErrorMessage 
                    name='name' 
                    component={Form.Text} 
                    className='text-danger ms-2'
                  />
              </Form.Group>
            
            
              <Form.Group>
                <Form.Label htmlFor='email'>Email:</Form.Label>
                
                <Field
                    id="email"
                    type="text"
                    placeholder="escribe tu nombre"
                    name="email"
                    as={Form.Control} 
                  />
                <ErrorMessage 
                    name='email' 
                    component={Form.Text} 
                    className='text-danger ms-2'
                  />
                
                <Form.Label htmlFor='password'>password:</Form.Label>
                
                <Field
                    id="password"
                    type="text"
                    placeholder="escribe tu nombre"
                    name="password"
                    as={Form.Control} 
                  />
                <ErrorMessage 
                    name='password' 
                    component={Form.Text} 
                    className='text-danger ms-2'
                  />

              </Form.Group>
           
          <Row className='justify-content-end mt-3'>
            <Col md={3}>
              <Button variant='dark'
              disabled={false}
              className='w-100'
              type='submit'

              >

                Registrate

              </Button>
            </Col>
          </Row>
        </Form>
      )
    }  
    </Formik>
  )
}
