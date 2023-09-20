import Joi from 'joi'

const validarCodigo = codigo => {
  const codigoSchema = Joi.object({
    codigo: Joi.number().required(),
  })

  const { error } = codigoSchema.validate({ codigo })

  if (error) {
    return { result: false, error }
  } else {
    return { result: true }
  }
};

export default validarCodigo
