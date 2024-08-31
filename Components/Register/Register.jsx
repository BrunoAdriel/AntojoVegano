import React from "react";
import ImgPage from "../Hooks/LoginHook";
import './Register.css';


const Register = ({selectedImg}) => {

    return(
    <div className="RegisterPage">
        <section className="RegisterImageContainer" style={{ backgroundImage: `url(${selectedImg})` }} >
        </section>
            <section className="RegisterFormContainer">
                <form>
                    <div class="mb-1">
                        <label for="Name" className="form-label">Nombre</label>
                        <input type="email" className="form-control" id="Name"/>
                    </div>
                    <div class="mb-1">
                        <label for="Surname" className="form-label">Apellido</label>
                        <input type="email" className="form-control" id="Surname"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword2" className="form-label">Confirmar contraseña</label>
                        <input type="password" className="form-control" id="exampleInputPassword2" />
                    </div>
                    <div class="mb-3 form-check">
                        <div id="emailHelp" className="form-label">Volver al <a href="/">Inicio!</a></div>
                        <div id="emailHelp" className="form-label">Volver a iniciar sesion?<a href="/Login">Login</a></div> 
                    </div>
                    <button type="submit" className="btn btn-success">Submit</button>
                </form>
        </section>
    </div>
    )
}

export default ()=>(
    <ImgPage>
        <Register />
    </ImgPage>
);

