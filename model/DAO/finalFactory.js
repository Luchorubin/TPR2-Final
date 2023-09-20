import FinalMemDAO from './finalMem.js'

class FinalFactoryDAO {
    static get(tipo) {
        switch(tipo) {
            case 'MEM' :
                console.log(' ***** Persistiendo en Memoria ***** ')
                return new FinalMemDAO()

            default: 
                console.log(' ***** Persistiendo en default (Memoria) ***** ')
                return new FinalMemDAO()
        }
    }
}

export default FinalFactoryDAO