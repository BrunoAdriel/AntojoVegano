import React from "react";


const Carrito = () =>{
    return(<>
        <div className="container">
            <section>
            <table className="table table-striped-columns">
                <thead>
                    <tr className="table-active">
                        <th>Producto</th>
                        <th>Cantidad</th>                    
                        <th>Precio</th>
                        <th>Total</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="table-active">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3" className="text-end">Total a pagar:</td>
                        <td>$40</td>
                        <td>Borrar Carrito!</td>   
                    </tr>
            </tfoot>
            </table>
            </section>
        </div>
    </>)
}

export default Carrito