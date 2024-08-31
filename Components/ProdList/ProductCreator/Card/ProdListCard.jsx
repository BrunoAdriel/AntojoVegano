import React from "react";

// Codigo para crear la card con los datos de cada producto
const ProdListCard = ({ img, title, description }) => {

    return(<>
            <div className="card mb-3" style={{maxWidth: '540px;'}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={img} className="img-fluid rounded-start" alt={title}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{title} Card title</h5>
                            <p className="card-text">{description}This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

                        </div>
                    </div>
                </div>
            </div>
    </>)

}

export default ProdListCard; 