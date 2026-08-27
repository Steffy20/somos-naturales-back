const dns = require('dns');

dns.setServers([
    '8.8.8.8',
    '1.1.1.1'
]);





require('dotenv').config();
const Server = require('./models/server');


const server = new Server();



server.listen();