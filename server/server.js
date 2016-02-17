'use strict';

const Hapi = require('hapi');
const Good = require('good');
const GoodConsole = require('good-console'); 
const Inert = require('inert');
const config = require('config');
const routes = require('./routes/Routes');
const staticRoute = require('./routes/Static');
const server = new Hapi.Server();

server.connection({
    host : config.get('server-info.host'),
    port : process.env.PORT
});

console.log(config.get('server-info'));


server.register(Inert, (err) => {
    if(err) {
        throw err;
    } 
      
    server.route({
        method : 'GET',
        path : '/{param*}',
        config : staticRoute.getStaticConfig
    });
    
});

//Add user endpoints
server.route(routes.userEndPoints);

server.register({
    register : Good,
    options : {
        reporters : [{
            reporter : GoodConsole,
            events : {
                response : '*',
                log : '*'
            }
        }]
    }
   }, (err) => {
     if(err) {
      throw err;  
     }
    server.start(() => {
        console.log('Server Runnig at : ' + server.info.uri);   
    });
   }
);


