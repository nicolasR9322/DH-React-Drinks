import {Formik, Field, ErrorMessage} from 'formik'
import {Form,Row,Col, Button} from 'react-bootstrap'
import * as Yup from 'yup'
import useCategories from '../../hooks/useCategories'
import useDrinks from '../../hooks/useDrinks'

export const SearchForm = () => {


  const {categories} = useCategories();
  const {getDrinks, loading} = useDrinks();

  const initialValues = {
    ingredient :"",
    category: ""
  }
  
const validationSchema = Yup.object({
  ingredient : Yup.string().required("el nombre es obligatorio"),
  category: Yup.string().required("la categoria es requerida")
})

  const handleSubmit = (values) => {
    getDrinks(values)
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
                <Form.Label htmlFor='ingredient'>Ingrediente de la bebida </Form.Label>
                <Field
                    id="ingredient"
                    type="text"
                    placeholder="Ej: tequila, vodka, etc"
                    name="ingredient"
                    as={Form.Control} 
                  />
                <ErrorMessage 
                    name='ingredient' 
                    component={Form.Text} 
                    className='text-danger ms-2'
                  />
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
                <ErrorMessage 
                    name='category' 
                    component={Form.Text} 
                    className='text-danger ms-2'
                  />
              </Form.Group>
            </Col>
          </Row>
          <Row className='justify-content-end mt-3'>
            <Col md={3}>
              <Button variant='danger'
              disabled={loading}
              className='w-100'
              type='submit'

              >
                {loading ? "buscando" : "Buscar bebida"}

              </Button>
            </Col>
          </Row>
        </Form>
      )
    }  
    </Formik>
  )
}
