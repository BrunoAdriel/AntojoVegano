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
        <section className="LoginImageContainer" style={{ backgroundImage: `url(${selectedImg})` }} >
        </section>
            <section className="LoginFormContainer">
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Mantenerme registrado.</label>
                        <div id="emailHelp" className="form-label">Olvidaste tu Contraseña? <a>Click aqui!</a></div> 
                    </div>
                    <button type="submit" className="btn btn-success">Submit</button>
                </form>
        </section>
    </div>
    </>)
}

export default Login;