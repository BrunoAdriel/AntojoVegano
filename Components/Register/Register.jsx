import React, {useState} from "react";
import ImgPage from "../Hooks/LoginHook";
import './Register.css';


const Register = ({selectedImg}) => {

    //Definir que valores voy a exportar a la BD
    const [formData, setFormData] = useState({
        Name:"",
        SurName:"",
        Phone:"",
        Address:"",
        PostalCode:"",
        PassHash:"",
        BirthDay:"",
        Email:""
    });

    //manejar los datos y compararlos con los values
    const handleChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    //manejar el envio de los datos hacia BD
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await fetch('http://localhost:5000/Register',{
                method:"POST",
                headers:{ "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });
            
            const data = await response.json();
            if (response.ok){
                alert("Registro Exitoso");
            } else {
                alert("error: " + data.error);
            }

        } catch(error){
            console.error("Error a enviar los datos:", error);
        }
    };

    return(
    <div className="RegisterPage">
        <section className="RegisterImageContainer" style={{ backgroundImage: `url(${selectedImg})` }}></section>
            <section className="RegisterFormContainer">
                <form onSubmit={handleSubmit}>
                <div className="row">
                    <div class="col-md-6 mb-1">
                        <label htmlFor="Name" className="form-label">Nombre</label>
                        <input type="text" className="form-control" name="Name" value={formData.Name} onChange={handleChange}/>
                    </div>
                    <div class="col-md-6 mb-1">
                        <label htmlFor="SurName" className="form-label">Apellido</label>
                        <input type="text" className="form-control" name="SurName" value={formData.SurName} onChange={handleChange}/>
                    </div>
                </div>
                <div className="row">
                    <div class="col-md-6 mb-1">
                        <label htmlFor="Phone" className="form-label">Telefono</label>
                        <input type="number" className="form-control" name="Phone" value={formData.Phone} onChange={handleChange}/>
                    </div>
                    <div class="col-md-6 mb-1">
                        <label htmlFor="BirthDay" className="form-label">Cumpleaños</label>
                        <input type="date" className="form-control" name="BirthDay" value={formData.BirthDay} onChange={handleChange}/>
                    </div>
                </div>
                <div className="row">
                    <div class="col-md-6 mb-2">
                        <label htmlFor="Address" className="form-label">Direccion</label>
                        <input type="text" className="form-control" name="Address" value={formData.Address} onChange={handleChange}/>
                    </div>
                    <div class="col-md-6 mb-1">
                        <label htmlFor="PostalCode" className="form-label">Codigo Postal</label>
                        <input type="number" className="form-control" name="PostalCode" value={formData.PostalCode} onChange={handleChange}/>
                    </div>
                </div>
                <div className="row">
                    <div class="col-md-6 mb-3">
                        <label htmlFor="Email" className="form-label">Email</label>
                        <input type="email" className="form-control" name="Email" value={formData.Email} onChange={handleChange}/>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label htmlFor="PassHash" className="form-label">Contraseña</label>
                        <input type="password" className="form-control" name="PassHash" value={formData.PassHash} onChange={handleChange}/>
                    </div>
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

