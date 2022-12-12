const express = require('express')
const cors = require('cors')
const { dbConnection } = require('../database/config')


class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.usuariosPath = '/api/usuarios';


    // Conectar a la base de datos
    this.connectDB();


    // Middlewares funciones que van agregar funcionalidades a mi servidor
    this.middlewares();


    // Rutas de mi aplicacion
    this.routes();
  }

  async connectDB() {
    await dbConnection();
  }

  middlewares() {

    // CORS
    this.app.use(cors())

    // Lectura y parseo del body
    this.app.use(express.json())

    // Directorio publico
    this.app.use(express.static('public'))
  }

  routes() {
    this.app.use(this.usuariosPath, require('../routes/usuarios'))
  }

  listen() {
    this.app.listen( this.port, () => {
      console.log(`Express server listening on port: ${this.port}`)
    })
  }
}


module.exports = Server;