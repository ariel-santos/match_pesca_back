
const HapiSwagger = require('hapi-swagger');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const Pack = require('./../package');
const MongoosePlugin = require('./../plugins/mongoose.plugin');

// MODULES
const ClienteModule = require('./../modules/cliente/cliente.module');

module.exports = [
    {
        plugin: MongoosePlugin,
        options: {
            mongoDbUri: process.env.MONGO_DB_URI
        }
    },
    Inert,
    Vision,
    {
        plugin: HapiSwagger,
        options: {
            info: {
                title: 'MatchPesca API Documentation',
                version: Pack.version,
            },
        }
    },
    require('hapi-auth-jwt2'),
    ClienteModule
];