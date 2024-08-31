import React from "react";
import ProdListCard from "../Card/ProdListCard";
import './ProdListCategory.css';

// Seleccionar la categoria y armar la vista

const ProdListCategory = ({ categoryName, categoryImg, products }) =>{

    return(<>
        <div>
            <h3>{categoryName}</h3>
            <section className="containerTitleProd" style={{ backgroundImage: `url(${categoryImg})`}}> </section>
            <section className="container">
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
        </div>
    </>)
}

export default ProdListCategory;
