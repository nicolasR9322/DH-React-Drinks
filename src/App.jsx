import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { CategoriesProvider } from "./context/CategoriesProvider"
import { DrinksProvider } from "./context/DrinksProvider"
import { UserProvider } from "./context/UserProvider"
import {CartProvider} from "./context/cartProvider"
import { MainLayout } from "./layouts"
import { AppRouter } from './routes'


function App() {

  return (
    <UserProvider>
      <CategoriesProvider>
        <DrinksProvider>
          <CartProvider>
            <MainLayout>
              <AppRouter />
            </MainLayout>
          </CartProvider>
        </DrinksProvider>
      </CategoriesProvider>
    </UserProvider>
  )
}

export default App
