import React,{ useState, useEffect } from "react";
import ProdListCard from "../Card/ProdListCard";
import './ProdListCategory.css';

// Constante para guardar y pasar el carrito
export let carritoConstante = []

// Seleccionar la categoria y armar la vista
const ProdListCategory = ({ categoryName, categoryImg, products }) =>{

    const [carrito, setCarrito] = useState([])

        const addToCarrito = (product)=>{
            setCarrito((prevCarrito) => {
                const existingProductIndex = prevCarrito.findIndex(item => item.title === product.title);
                if (existingProductIndex !== -1) {
                    // Actualizar la cantidad del producto existente
                    const updatedCarrito = [...prevCarrito];
                    updatedCarrito[existingProductIndex].quantity += product.quantity;
                    return updatedCarrito;
                } else {
                    // Añadir nuevo producto al carrito
                    return [...prevCarrito, product];
                }
            });
        };
    
   // useEffect para actualizar la constante carritoConstante
   useEffect(() => {
    carritoConstante = carrito;
    console.log("carritoConstante actualizado:", carritoConstante);
}, [carrito]);

    return(<>
        <div>
            <h3>{categoryName}</h3>
            <section className="containerTitleProd" style={{ backgroundImage: `url(${categoryImg})`}}> </section>
            <section className="container">
                <div className="product-cards-container distasnceBox">
                    {products.map((product, index) =>(
                        <ProdListCard
                        key={index}
                        img={product.img}
                        title={product.title}
                        description={product.description}
                        addToCarrito={addToCarrito}
                        />
                    ))}
                </div>
            </section>
        </div>
    </>)
}

export default ProdListCategory;
