import ApiFinal from '../api/final.js'

class ControladorFinal {

    constructor() {
        this.apiFinal = new ApiFinal()
    }

    postLibro = async(req, res) => {
        try{
            const libro = req.body
            res.json(await this.apiFinal.guardarLibro(libro))
        }catch(error){
            return {"errorMsg: ": error}
        }
    }

    deleteLibro = async(req, res) => {
        try{
            const {codigo} = req.body
            res.json(await this.apiFinal.borrarLibro(codigo))
        }catch(error){
            return {"errorMsg: ": error}
        }
    }

    putLibro = async(req, res) => {
        try{
            const {codigo} = req.body
            res.json(await this.apiFinal.alquilarLibro(codigo))
        }catch(error){
            return {"errorMsg: ": error}
        }
    }

    getLibros = async(req, res) => {
        try{
            res.json(await this.apiFinal.obtenerLibros())
        }catch(error){
            return {"errorMsg: ": error}
        }
    }
    
}

export default ControladorFinal