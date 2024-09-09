import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import ProductManager from './Components/ProductoManager/ProductManager';
import Register from './Components/Register/Register';
import ProdList from './Components/ProdList/ProdList';
import Carrito from './Components/Carrito/Carrito';
import './index.css';

function app() {
    return(
        <>
        <BrowserRouter>
        <Navbar />
            <Routes>
                <Route path='/' element={
                    <>
                    <ItemListContainer />
                    <ProductManager />
                    <ProdList />
                    <Footer/>
                    </>
                    }/>
                <Route path='/Login' element={<Login />}/>
                <Route path="/Register" element={<Register />} />
                <Route path="/Cart" element={<Carrito/>} />
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default app