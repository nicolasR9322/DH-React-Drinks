import { Container } from "react-bootstrap"
import { Header } from "../components/Header"
import styles from "./index.module.css"
import propTypes from "prop-types"

export const MainLayout = ({children}) => {
  return (
    <div className={styles.main}>
        <Header />
        <Container className="mt-5">
            {children}
        </Container>
        
    </div>  
)
}

MainLayout.propTypes = {
    children: propTypes.node.isRequired
}