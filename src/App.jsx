import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { MainLayout } from "./layouts"
import { AppRouter } from './routes'


function App() {

  return (
    <MainLayout>
     <AppRouter />
    </MainLayout>
  )
}

export default App
