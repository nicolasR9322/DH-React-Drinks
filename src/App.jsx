import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { UserProvider } from "./context/UserProvider"
import { MainLayout } from "./layouts"
import { AppRouter } from './routes'


function App() {

  return (
    <UserProvider>
      <MainLayout>
        <AppRouter />
      </MainLayout>
    </UserProvider>
  )
}

export default App
