//Archivo de configuración para la base de datos 

//Importar el modulo
const mysql = require('mysql')

//Creando la conexion a mysql}
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Dark51984352',
    database: 'hospital'
})

conexion.connect(function (error){
    if (error){
        console.log(`Ocurrió un error en la conexión ${error}`)
        return;
    } else {
        console.log('Conexión exitosa')
    }
})

module.exports = {conexion}