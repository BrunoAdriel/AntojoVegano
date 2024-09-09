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


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://adrielbruno08:Kq0gHxHj98JQCrBi@codertest.iijpsgz.mongodb.net/?retryWrites=true&w=majority&appName=AntojoVegano";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);



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