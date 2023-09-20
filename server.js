import express from "express"
import {RouterFinal} from './router/final.js'
import config from './config.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))


/* ----------------------------------------------------------------------- */
/*                  ZONA DE RUTAS MANEJADAS POR EL ROUTER                  */
/* ----------------------------------------------------------------------- */
app.use('/final', new RouterFinal().start())


/* ----------------------------------------------------------------------- */
/*                            Servidor Listen                              */
/* ----------------------------------------------------------------------- */

const PORT = config.PORT
const server = app.listen(PORT, () => console.log(`Servidor express escuchando en el puerto ${PORT}`))
server.on('error', error => console.log(`Error en servidor: ${error.message}`))
