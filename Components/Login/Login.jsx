import React from "react";
import ImgPage from "../Hooks/LoginHook";
import './Login.css';


const Login = ({selectedImg}) => {

    return(
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
                        <div id="emailHelp" className="form-label">No estas registrado? <a href="/Register">Registrate!</a></div> 
                    </div>
                    <button type="submit" className="btn btn-success">Submit</button>
                </form>
        </section>
    </div>
    )
}

export default ()=>(
    <ImgPage>
        <Login />
    </ImgPage>
);

