import React from "react";
import ProdListCard from "../Card/ProdListCard";

// Seleccionar la categoria y armar la vista

const ProdListCategory = ({ categoryName, categoryImg, products }) =>{

    return(<>
        <section className="">
            <img src={categoryImg} alt={categoryName} />
            <h3>{categoryName}Title</h3>
            <div className="product-cards-container">
                {products.map((product, index) =>(
                    <ProdListCard
                    key={index}
                    img={product.img}
                    title={product.title}
                    description={product.description}
                    />
                ))}
            </div>
        </section>
    </>)
}

export default ProdListCategory;
