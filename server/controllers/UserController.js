var joi = require('joi'), boom = require('boom');
var userModel = require('../model/User');


exports.findAll = {
    handler: function (request, reply) {
        reply(userModel.getAll);
    }
};

exports.findById = {
    handler: function (request, reply) {
        reply(userModel.findOne);
    }
};