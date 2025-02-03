import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import './Navbar.css'

function Navbar(){
    return(
        <div className="NavControler">
            <section>
                <a href="/">
                    <img src="#" alt="Antojo Vegano" className="logoContainer"/>
                </a>
            </section>
            <section>
                <ul className="prodContainer">
                    <li>Facturas</li>
                    <li>Budines</li>
                    <li>Alfajores y Tartas</li>
                    <li>Salado</li>
                </ul>
            </section>
            <section>
                <CartWidget />
            </section>
        </div>
    )
}

export default Navbar