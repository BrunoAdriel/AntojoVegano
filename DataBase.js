const mysql = require('mysql2');

const connection = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'RocioBel43093',
    database:'AntojoVegano',
    port:3306
});

connection.connect((err) => {
    if (err) {
        console.error('❌ Error al conectar a MySQL:', err);
        return;
    }
    console.log('✅ Conectado a la base de datos MySQL');
});

module.exports = connection;



