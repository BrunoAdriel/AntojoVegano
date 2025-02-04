import React, { useEffect, useState} from "react";
import ProdListCategory from "./ProductCreator/CategoryProduct/ProdListCategory";


// Constante para guardar y pasar el carrito
export let carritoConstante = []

// Mostrar las categorias y los productos
const ProdList = () => {

const [prods, setProds] = useState([]);

useEffect(()=>{
    const fetchProducts = async () => {
        try{
            const response = await fetch('http://localhost:5000/products');
            const data = await response.json();
            setProds(data);
        } catch(error) {
            console.error("Error al obtener los productos de la BD", error);
        }
    };
    fetchProducts();
}, []);

console.log(prods);

    const [carrito, setCarrito] = useState([])
// Guardado y acumulacion de prods carrito
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
        <div className="container">
            {prods.map((category, index)=>(
                <ProdListCategory
                key={index}
                categoryName={category.sectionName}
                categoryImg={category.sectionImage}
                products={category.products}
                addToCarrito={addToCarrito}
                />
            ))}
        </div>
    </>)
}


export default ProdList;