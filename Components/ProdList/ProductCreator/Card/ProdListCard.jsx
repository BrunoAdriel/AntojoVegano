import React, { useState, useEffect } from "react";
import './ProdListCard.css'

// Codigo para crear la card con los datos de cada producto
const ProdListCard = ({ img, title, description, addToCarrito }) => {

    const [showInput, setShowInput] = useState();
    const [quantity, setQuantity] = useState(1);

    // Cambia entre mostrar y ocultar el input
    const handleBtnCantidad = () =>{
        setShowInput(true);
    }

    // Manejo de la cantidad del input
    const handleInput = (e) =>{
        setQuantity(e.target.value)
    }

    // Añade el producto al carrito
    const handleBtnComprar = () =>{
        const products = {
            title,
            quantity
        };
    addToCarrito(products)
    setShowInput(false);
    }


    return(<>

            <div className="card text-bg-secondary mb-3 containerCard">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={img} className="img-fluid rounded-start" alt={title}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                        </div>

                        <div className="btn-container">
                            {!showInput && (
                                <button type="button" className="btn btn-success classBtnComprar" onClick={handleBtnCantidad}>Cantidad</button>
                            )}
                            {showInput && (
                                <div className="input-group">
                                    <input type="number" className="form-control inputCantidad" placeholder="Cantidad" min="1" value={quantity} onChange={handleInput}/>
                                    <button type="button" className="btn btn-success btnComprar" onClick={handleBtnComprar}>Comprar</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
    </>)

}

export default ProdListCard; 