import React from "react";
import './ProdListCard.css'

// Codigo para crear la card con los datos de cada producto
const ProdListCard = ({ img, title, description }) => {

    return(<>
            <div className="card mb-3 containerCard">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={img} className="img-fluid rounded-start" alt={title}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                        </div>
                    </div>
                </div>
            </div>
    </>)

}

export default ProdListCard; 