
const express = require('express');
const cors = require('cors');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';
        
        // Middlewares
            // Se sirven antes que la rutas
        this.middlewares();
   
        // Routes
        this.routes();
    }


    middlewares() {
        // CORS
        this.app.use( cors() );

        // Lectura y parseo 
            // Trata de parsear los datos que vengan en el request
        this.app.use( express.json() );

        // Directorio publico
        this.app.use(express.static('public'));
    }

    routes() {

       this.app.use( this.usuariosPath, require('../routes/usuarios'));
    }

    listen() {
        this.app.listen( this.port , () => {
            console.log('Escuchando en el puerto', this.port );
        });
    }

}




module.exports = Server ;