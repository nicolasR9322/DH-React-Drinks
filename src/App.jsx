import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { CategoriesProvider } from "./context/CategoriesProvider"
import { UserProvider } from "./context/UserProvider"
import { MainLayout } from "./layouts"
import { AppRouter } from './routes'


function App() {

  return (
    <UserProvider>
      <CategoriesProvider>
        <MainLayout>
          <AppRouter />
        </MainLayout>
      </CategoriesProvider>
    </UserProvider>
  )
}

export default App
