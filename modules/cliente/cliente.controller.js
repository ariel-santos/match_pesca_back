const Cliente = require('./cliente.model');
const bcrypt = require('bcrypt');
const JwtService = require('./../../services/jwt.service');
const UtilService = require('./../../utils/util.service');

module.exports = {
    async cadastro (req, h) {
        try {
            const senhaHash = await bcrypt.hash(req.payload.password, 10);
            const cliente = new Cliente({
                nome: req.payload.nome,
                telefone: req.payload.telefone,
                email: req.payload.email,
                senha: senhaHash,
                dataNascimento: req.payload.dataNascimento,
                cep: req.payload.cep,
                cidade: req.payload.cidade,
                estado: req.payload.estado,
                municipio: req.payload.municipio,
            });

            const cadastro = await cliente.save()
            .catch(err => UtilService.retornoErroMongo(h, err));

            return h.response(cadastro);
        } catch (error) {
            return UtilService.retornoErroImplementacao(h, error);
        }
    }
};
