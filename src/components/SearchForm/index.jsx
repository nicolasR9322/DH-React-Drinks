import {Formik, Field, ErrorMessage} from 'formik'
import {Form,Row,Col,Alert, Button} from 'react-bootstrap'
import * as Yup from 'yup'
import useCategories from '../../hooks/useCategories'

export const SearchForm = () => {


  const {categories} = useCategories()


  const initialValues = {
    name :"",
    category: ""
  }
  
const validationSchema = Yup.object({
  name : Yup.string().required("el nombre es obligatorio")
})

  const handleSubmit = (values) => {
    console.log(values);
  }

  return (
    <Formik 
    initialValues={initialValues}
    onSubmit={handleSubmit}
    validationSchema={validationSchema}
    >

    {
      (formik) => (
        <Form onSubmit={formik.handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group>
                <Form.Label htmlFor='name'>Nombre de la bebida </Form.Label>
                <Field
                  id="name"
                  type="text"
                  placeholder="Ej: tequila, vodka, etc"
                  name="name"
                  as={Form.Control} 
                  />
                  <ErrorMessage name='name' component={Form.Text} className='text-danger ms-2'/>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label htmlFor='category'>Categoria:</Form.Label>
                <Field
                  id="category"
                  name="category"
                  as={Form.Select}                  
                >
                  {
                    categories.sort((a,b) => a.strCategory > b.strCategory ? 1 : a.strCategory < b.strCategory ? -1 : 0).map((category, index) => 
                      (<option 
                        value={category.strCategory} 
                        key={category.strCategory+index}>
                          {category.strCategory}
                        </option>
                    ))
                  }
                  <option value="" defaultValue={null} hidden>- Seleccione categoria -</option>
                </Field>
              </Form.Group>
            </Col>
          </Row>
          <Row className='justify-content-end mt-3'>
            <Col md={3}>
              <Button variant='danger'
              disabled={false}
              className='w-100'
              type='submit'
              >
                Buscar bebida

              </Button>
            </Col>
          </Row>
        </Form>
      )
    }  
    </Formik>
  )
}
