module.exports = {
    retornoValidacaoPayload(h, erro) {
        console.log(erro);
        return h.response({
            msg: erro.details[0].message
        }).code(422).takeover();
    },
    retornoErroMongo(h, erro) {
        console.log(erro);
        return h.response({
            erro: true,
            msg: erro
        }).code(500).takeover();
    },
    retornoErroImplementacao(h, erro) {
        console.log(erro);
        return h.response({
            erro: true,
            msg: erro
        }).code(500).takeover();
    }
}