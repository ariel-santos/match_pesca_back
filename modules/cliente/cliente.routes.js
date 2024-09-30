const ClienteController = require('./cliente.controller')
const Joi = require('joi');
const UtilService = require('./../../utils/util.service');

module.exports = [
    {
        path: '/cliente/cadastro',
        method: 'POST',
        handler: ClienteController.cadastro,
        options: {
            tags: ['api'],
            validate: {
                payload: Joi.object().keys({
                    nome: Joi.string().required(),
                    senha: Joi.string().required(),
                    email: Joi.string().email().required(),
                    cep: Joi.string().required(),
                    telefone: Joi.string(),
                    dataNascimento: Joi.string(),
                    cidade: Joi.string(),
                    estado: Joi.string(),
                    municipio: Joi.string()
                }),
                failAction: (req, h, error) => {
                    return UtilService.retornoValidacaoPayload(h, error);
                }
            }
        }
    }
];