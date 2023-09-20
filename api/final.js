import config from '../config.js'
import FinalFactoryDAO from '../model/DAO/finalFactory.js'
import { verificarSorteo } from '../services/sorteoService.js'
import Notificador from '../services/notificador.js'
import validar from '../validations/libroValidations.js'
import validarCodigo from '../validations/codigoValidations.js'

class ApiFinal {
    constructor() {
        this.finalModel = FinalFactoryDAO.get(config.MODO_PERSISTENCIA)
    }

    async guardarLibro(libro){
        let val = validar(libro)
        if(val.result){
            let libroDevuelto = await this.finalModel.saveLibro(libro)
            let hayUnoSolo = await verificarUnAlquilableSolo()
            if(hayUnoSolo){
                Notificador.enviarNotificacion("Ya hay libros para alquilar.") 
            }
            return libroDevuelto
        }else{
            return val.error
        }
    }

    async borrarLibro(codigo){
        let val = validarCodigo(codigo)
        if(val.result){
            return await this.finalModel.deleteLibro(codigo)
        }else{
            return val.error
        }
    }

    async alquilarLibro(codigo){
        let libro = this.finalModel.getLibro(codigo)
        if(libro == null){
            throw new Error('Libro no encontrado')
        }else{
            let ganaste = await verificarSorteo()
            console.log(ganaste)
            if(ganaste){
                await this.borrarLibro(codigo)
                return {mensaje: "¡Felicidades! Ganaste el sorteo y te lo podes llevar."}
            }else{
                libro.estado.alquilado = true
                libro.estado.no_apto = true
                libro.estado.disponible = false
                this.finalModel.putLibro(codigo, libro)
                if(!await this.verificarAlquilables()){
                    Notificador.enviarNotificacion("No quedan libros para alquilar.")
                }
                return libro
            }
        }
    }

    async verificarAlquilables() {
        const libros = await this.obtenerLibros()
        for (const libro of libros) {
            if (libro.estado.disponible) {
                return true
            }
        }
        return false
    }

    async verificarUnAlquilableSolo() {
        const libros = await this.obtenerLibros();
        const disponibles = libros.filter(libro => libro.estado.disponible === true);
        return disponibles.length === 1;
    }

    async obtenerLibros(){
        return await this.finalModel.findLibros()
    }

}

export default ApiFinal