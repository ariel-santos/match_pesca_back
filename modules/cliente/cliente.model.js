const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClienteSchema = new Schema({
    nome: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    telefone: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    dataNascimento: {
        type: String,
        required: true
    },
    cep: {
        type: String,
        required: true
    },
    cidade: {
        type: String,
        required: false
    },
    estado: {
        type: String,
        required: false
    },
    municipio: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Cliente', ClienteSchema);