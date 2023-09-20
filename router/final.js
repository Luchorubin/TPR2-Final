import express from 'express'
import ControladorFinal from '../controller/final.js'

export class RouterFinal{
    constructor(){
        this.router = express.Router()
        this.controladorFinal = new ControladorFinal()
    }

    start(){
        this.router.post('/alta-libro', this.controladorFinal.postLibro)
        this.router.post('/baja-libro', this.controladorFinal.deleteLibro)
        this.router.post('/alquilar-libro', this.controladorFinal.putLibro)
        this.router.get('/listar-todos', this.controladorFinal.getLibros)
        //this.router.get('/listar-separados', this.controladorFinal.getLibrosSeparados)
        return this.router
    }
}