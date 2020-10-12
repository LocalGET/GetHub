const { Router } = require('express');
const userController   = require('./controllers/UserController');
const clientController = require('./controllers/ClientController');
const authController   = require('./controllers/AuthController');
const chatController   = require('./controllers/ChatController');
const scoreController  = require('./controllers/ScoreController');
const proposalsController = require('./controllers/ProposalsController');
const interestController = require('./controllers/ProposalInterestController');

const routes = Router();

routes.get('/users', userController.index);

routes.post('/auth/register', authController.register);
routes.post('/auth/signup', authController.signup);

routes.get('/chat',chatController.list);
routes.get('/chat/:originator_id',chatController.getMessage);
routes.post('/chat/send',chatController.sendMessage);

routes.get('/client', clientController.index);
routes.post('/client', clientController.create);

routes.get('/score', scoreController.index);
routes.post('/score', scoreController.create);

routes.get('/proposals', proposalsController.index);
routes.get('/proposals/:client_id', proposalsController.findByClient);
routes.post('/proposals', proposalsController.create);

routes.get('/interest', interestController.index);
routes.get('/interest/:proposal_id', interestController.findByProposalId);
routes.post('/interest', interestController.create);


interestController

module.exports = routes;