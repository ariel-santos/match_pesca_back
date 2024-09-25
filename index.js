'use strict'
const Hapi = require('@hapi/hapi');

const init = async () => {
    const server = Hapi.server({
        port: 8000,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path: '/lista',
        handler: (request, h) => {
            return {
                id: 1,
                nome: 'nome'
            };
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();