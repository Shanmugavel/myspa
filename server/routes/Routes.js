var userController = require('../controllers/UserController');

exports.userEndPoints = [
    { method: 'GET', path : '/users', config: userController.findAll },
    { method: 'GET', path : '/user/{userId}', config: userController.findById }
];