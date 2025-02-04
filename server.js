
const express = require('express');
const db = require('./DataBase'); // Importamos la conexión
const cors = require('cors')

const app = express();
app.use(cors({
    origin: "http://localhost:3000", // Permitir peticiones desde el frontend
    methods: ["GET", "POST"],
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

app.listen(5000, () => console.log('🚀 Servidor corriendo en http://localhost:5000'));


