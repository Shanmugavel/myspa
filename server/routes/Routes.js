var userController = require('../controllers/UserController');
var loginController = require('../controllers/LoginController');

exports.userEndPoints = [
    { method: 'GET', path : '/users', config: userController.findAll },
    { method: 'GET', path : '/user/{userId}', config: userController.findById },
    { method : 'POST', path : '/slogin', config : loginController.login }
];