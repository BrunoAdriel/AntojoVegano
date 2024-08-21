import Footer from './Components/Footer/Footer';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import ProductManager from './Components/ProductoManager/ProductManager';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function app() {
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={
                    <>
                    <Navbar />
                    <ItemListContainer />
                    <ProductManager />
                    <Footer/>
                    </>
                    }/>
                <Route path='/Login' element={<Login />}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default app