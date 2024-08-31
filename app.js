import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import ProductManager from './Components/ProductoManager/ProductManager';
import Register from './Components/Register/Register'
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
                    <Footer/>
                    </>
                    }/>
                <Route path='/Login' element={<Login />}/>
                <Route path="/Register" element={<Register />} />
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default app