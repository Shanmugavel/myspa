'use strict';

const Hapi = require('hapi');
const Good = require('good');
const GoodConsole = require('good-console'); 

const server = new Hapi.Server();
server.connection({
    host : '0.0.0.0',
    port : process.env.PORT
});

server.register(require('inert'), (err) => {
    if(err) {
        throw err;
    } 
    
    /*server.route({
        method : 'GET',
        path : '/',
        handler : function (request, reply) {
            return reply.file('./index.html');
        }
    });*/
    
    server.route({
        method : 'GET',
        path : '/{param*}',
        handler : {
            directory : {
                path : './client/'
            }
        }
    });
    
    server.route({
        method : 'GET',
        path : '/node_modules/{param*}',
        handler : {
            directory : {
                path : './node_modules/'
            }
        }
    });
});

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
    
/*server.route({
    method : 'GET',
    path : '/hello',
    handler : function (request, reply) {
        return reply('Hello World!');
    }
});*/

