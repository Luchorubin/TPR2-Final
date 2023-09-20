import Joi from 'joi'

const validar = libro => {
    
    const libroSchema = Joi.object({
        codigo: Joi.number().required(),
        titulo: Joi.string().required(),
        autor: Joi.string().required(),
        estado: Joi.object({
          disponible: Joi.boolean().valid(true).required(),
          alquilado: Joi.boolean().required(),
          no_apto: Joi.boolean().required(),
        }).required(),
      })

    const {error} = libroSchema.validate(libro)
    if(error){
        return {result: false, error}
    }else{
        return {result: true}
    }
}

export default validar