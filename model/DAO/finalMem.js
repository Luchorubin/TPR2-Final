
class FinalMemDAO {

    constructor() {
        this.libros = [
            {codigo: 1, titulo: "El Principito", autor:"Antoine de Saint-Exupéry", estado: {disponible: true, alquilado: false, no_apto: false}}
        ]
    }

    saveLibro(libro){
        this.libros.push(libro)
        return libro
    }

    deleteLibro(codigo) {
        const libroIndex = this.libros.findIndex(libro => libro.codigo === codigo)
        const libroBorrado = this.libros.splice(libroIndex, 1)[0]
        return libroBorrado  
    }

    getLibro(codigo) {
        return this.libros.find(libro => libro.codigo === codigo);
    }

    putLibro(codigo, libroModificado){
        const libroIndex = this.libros.findIndex(libro => libro.codigo === codigo)
        this.libros.splice(libroIndex, 1, libroModificado)[0]
        return libroModificado
    }

    findLibros(){
        return this.libros
    }
}

export default FinalMemDAO