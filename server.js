
const express = require('express');
const db = require('./DataBase'); // Importamos la conexión
const cors = require('cors')

const app = express();
app.use(cors({
    origin: "http://localhost:3000", // Permitir peticiones desde el frontend
    methods: ["GET", "POST", "UPDATE"],
    allowedHeaders: ["Content-Type"]
}));
app.use(express.json());

// Ruta para obtener productos
app.get('/products', (req, res) => {
db.query('SELECT * FROM products;', (err, results) => {
    if (err) {
        return res.status(500).json({ error: err.message });
    }
    res.json(results);
});
});

// Ruta para obtener las categorias
app.get('/category', (req, res) => {
    db.query('SELECT * FROM category;', (err, results) => { 
        if(err){
            return res.status(500).json({error: err.message});
        }
        res.json(results);
    });
});

// Ruta para registrar los usuarios
app.post('/Register', (req, res)=>{
    const {Name, SurName, Phone, Address, PassHash, BirthDay, PostalCode, Email} = req.body
    if(!Name || !SurName || !Phone || !Address || !PassHash || !BirthDay || !PostalCode || !Email){
        return res.status(400).json({error:'Todos los campos son obligatorios!'})
    }

    const query = `INSERT INTO customer(Name, SurName, Phone, Address, PassHash, BirthDay, PostalCode, Email) VALUES(?,?,?,?,?,?,?,?)`
    const values = [Name, SurName, Phone, Address, PassHash, BirthDay, PostalCode, Email || null]

    db.query(query, values, (err, result)=>{
        if(err){
            console.error('Error al insertar datos:', err);
            return res.status(500).json({error: 'Error al registrar usuario'});
        }
        res.status(200).json({message: 'Usuario registrado correctamente'});
    })
})

app.listen(5000, () => console.log('🚀 Servidor corriendo en http://localhost:5000'));


