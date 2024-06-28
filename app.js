import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import Navbar from './Components/Navbar/Navbar'
import ProdcutManager from './Components/ProductoManager/ProductManager'
import './index.css'

function app() {
    return(
        <>
        <Navbar />
        <ItemListContainer />
        <ProdcutManager />
        </>
    )
}

export default app