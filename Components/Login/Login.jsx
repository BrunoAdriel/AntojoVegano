import React, { useEffect, useState } from "react";
import './Login.css'


const Login = () => {

    const imgsLogin =[
        "https://estaticos.elcolombiano.com/documents/10157/0/581x918/0c380/580d365/none/11101/KJBT/image_content_27525038_20161203125649.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgma9q4UajVyDLQ_05GBqbg8jOf0JhQJc_Gs2bREfXJ24QR2wIDqRhy-AR3me-lqbyMgY&usqp=CAU",
        "https://covive.mx/wp-content/uploads/elementor/thumbs/baked-baking-bread-breakfast-298217-scaled-1-qph8zfdmcpp0bqppth9zupkyp3zmgw2t7iqmem2slc.jpg",
    ];

    // Selecciona una imagen aleatoria
    const imgRandom = () =>{
        const image = Math.floor(Math.random() * imgsLogin.length);
        return imgsLogin[image];
    }

    // Estado para seleccionar la imagen
    const [selectedImg, setSelectedImg] = useState('');

    useEffect(()=>{
        setSelectedImg(imgRandom())
    },[]);

    return(<>
    <div className="LoginPage">
        <div className="LoginContainer">
            <img src={selectedImg} alt="Imagenes de panaderia Background" className="LoginImg"/>
        </div>
            {/* <section>
                <h1>hola
                </h1>
            </section> */}
        </div>
    </>)
}

export default Login;