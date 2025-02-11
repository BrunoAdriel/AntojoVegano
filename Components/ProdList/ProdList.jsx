import React, { useEffect, useState} from "react";
import ProdListCategory from "./ProductCreator/CategoryProduct/ProdListCategory";


// Constante para guardar y pasar el carrito
export let carritoConstante = []


const ProdList = () => {

// Obtengo los productos y las categorias

const [prods, setProds] = useState([]);
const [category, setCategory] = useState([]);


useEffect(()=>{
    const fetchData = async ()=>{
        try{
            //Obtengo las Categorias de la BD
            const categoryRespose = await fetch('http://localhost:5000/category');
            const categoryData = await categoryRespose.json();


            //Obtener los productos de la BD
            const productRespose = await fetch('http://localhost:5000/products');
            const productData = await productRespose.json();

            console.log(productData);
        const combinedData = categoryData.map(category =>({
            ID: category.Category_ID,
            sectionName: category.CategoryName,
            sectionImage: category.ImgCat || 'default-category.jpg',
            products: productData
                .filter(product => product.Category_ID === category.Category_ID)
                .map(product =>({
                    img: product.ImageURL || 'default-product.jpg',
                    title: product.ProdName,
                    description: product.Description,
                    stock: product.QuantityStock,
                    price: product.Unit_price,
                    ID: product.Category_ID
                }))
        }));
        setCategory(combinedData);
        } catch(error){
            console.error('Error al obetener los datos de la BD', error);
        }
    };
    fetchData(); 
},[]);



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
            {category.map((category, index)=>(
                <div key={category.ID} id={`category-${category.ID}`}>
                    <ProdListCategory
                    key={index}
                    categoryName={category.sectionName}
                    categoryImg={category.sectionImage}
                    products={category.products}
                    addToCarrito={addToCarrito}
                />
                </div>
            ))}
        </div>
    </>)
}


export default ProdList;