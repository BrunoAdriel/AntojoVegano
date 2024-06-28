import React from "react";
import './ItemListContainer.css';

function ItemListContainer() {
    return (<>
            <div className="directionItemListContainer">
                <section className="imgContainer" >
                    <p >Delicias 100% Naturales</p>
                    <img alt="Imagen de entrada de la pagina" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3j9LYmEs5AI63yE7Aa1EKK30XDBysvObLtA&s"/>
                </section>
                <section className="capImgContainer" > 
                    <p>Nos esforzamos cada día para que disfrutes de los postres más deliciosos y saludables. Somos la elección más sabrosa y accesible para acompañarte en todos los momentos dulces de tu vida</p>
                    <img alt="Imagen de ... Fondo decorativo para texto" src="https://img.lagaceta.com.ar/fotos/notas/2024/06/12/budin-chocolate-nuez-sin-harinas-ni-manteca-1038776-084617.jpg"/>
                </section>
            </div>
            </>
    );
}

export default ItemListContainer;