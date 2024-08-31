import React from "react";
import ProdListCategory from "./ProductCreator/CategoryProduct/ProdListCategory";

// Mostrar las categorias y los productos

const ProdList = () => {

    const productData = [     {
        sectionName: 'Medialunas',
        sectionImage: 'URL_DE_LA_IMAGEN_DE_LA_SECCIÓN',
        products: [
            {
                imgSrc: 'URL_DE_LA_IMAGEN_DEL_PRODUCTO',
                title: 'Medialuna de Manteca',
                description: 'Deliciosa medialuna de manteca recién horneada.',
                lastUpdated: '3 mins ago'
            },
            {
                imgSrc: 'URL_DE_LA_IMAGEN_DEL_PRODUCTO',
                title: 'Medialuna de Grasa',
                description: 'Crocante medialuna de grasa, ideal para el mate.',
                lastUpdated: '5 mins ago'
            }
        ]
    },
    {
        sectionName: 'Budines',
        sectionImage: 'URL_DE_LA_IMAGEN_DE_LA_SECCIÓN',
        products: [
            {
                imgSrc: 'URL_DE_LA_IMAGEN_DEL_PRODUCTO',
                title: 'Budín de Limón',
                description: 'Esponjoso budín con un toque de limón.',
                lastUpdated: '10 mins ago'
            },
            // Agrega más productos según sea necesario
        ]
    },    
    ]

    return(<>
        <div className="container">
            {productData.map((category, index)=>(
                <ProdListCategory
                key={index}
                categoryName={category.sectionName}
                categoryImg={category.sectionImage}
                products={category.products}
                />
            ))}
        </div>
    </>)
}

export default ProdList;