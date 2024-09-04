import React, { useState, useEffect } from "react";
import './ProdListCard.css'

// Codigo para crear la card con los datos de cada producto
const ProdListCard = ({ img, title, description, addToCarrito }) => {

    const [showInput, setShowInput] = useState();
    const [quantity, setQuantity] = useState(1);
    const [isSelected, setIsSelected] = useState(false);

    // Cambia entre mostrar y ocultar el input
    const handleBtnCantidad = () =>{
        setShowInput(true);
    }

    // Manejo de la cantidad del input
    const handleInput = (e) =>{
        const inputValue = e.target.value

        const value = parseInt(inputValue, 10);
    
        if(value > 0 && !isNaN(value)){
            setQuantity(value)
        }else{
            setQuantity(1);
        }
    }

    // Añade el producto al carrito
    const handleBtnComprar = () =>{
        const products = {
            title,
            quantity
        };
    addToCarrito(products);
    setShowInput(false);
    setIsSelected(true);
    }


    return(<>

            <div className="card text-bg-secondary mb-3 containerCard">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={img} className="img-fluid rounded-start" alt={title}/>
                        {isSelected && <div className="selected-circle"></div>}
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
                                    <input type="number" className="form-control inputCantidad" placeholder="Cantidad" min="1" value={quantity} onChange={handleInput} 
                                        // prevenciones de caracteres especiales
                                        onKeyDown={(e)=>{
                                            if (e.key==="-" || e.key==="_" || e.key==="+" || e.key==="." || e.key==="*" || e.key==="%"){e.preventDefault();}
                                        }}
                                    />
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