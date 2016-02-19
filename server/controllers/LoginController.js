var joi = require('joi'), boom = require('boom');

exports.login = {
    handler : function (request, reply) {
        console.log(request.payload);
        reply({"status" :"success"});
    }
}