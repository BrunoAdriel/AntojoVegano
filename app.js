import Footer from './Components/Footer/Footer'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import Navbar from './Components/Navbar/Navbar'
import ProductManager from './Components/ProductoManager/ProductManager'
import './index.css'

function app() {
    return(
        <>
        <Navbar />
        <ItemListContainer />
        <ProductManager />
        <Footer/>
        </>
    )
}

export default app