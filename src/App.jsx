import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { CategoriesProvider } from "./context/CategoriesProvider"
import { DrinksProvider } from "./context/DrinksProvider"
import { AuthProvider } from "./context/AuthProvider"
import {CartProvider} from "./context/cartProvider"
import { MainLayout } from "./layouts"
import { AppRouter } from './routes'
import { BrowserRouter } from "react-router-dom"


function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <CategoriesProvider>
          <DrinksProvider>
            <CartProvider>
              <MainLayout>
                <AppRouter />
              </MainLayout>
            </CartProvider>
          </DrinksProvider>
        </CategoriesProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
