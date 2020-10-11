const { Router } = require('express');
const userController = require('./controllers/UserController');
const authController = require('./controllers/AuthController');
const routes = Router();

routes.get('/users', userController.index);
routes.post('/auth/register', authController.register);

module.exports = routes;