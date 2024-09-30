const ClienteRoutes = require('./cliente.routes');

const ClienteModule = {
    name: 'ClienteModule',
    register: (server, options, next) => {
        server.route(ClienteRoutes);
        next;
    }
};

module.exports = ClienteModule;