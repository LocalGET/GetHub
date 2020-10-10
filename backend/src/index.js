const express = require('express');
//const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//const cors = require('cors');
//const http = require('http');
//const routs = require('./routes');
//const { setupWebSocket } = require('./websocket');

const app = express();
//const server = http.Server(app);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

require('./controllers/authController')(app);
app.listen(3000);

//setupWebSocket(server);

//conexao Mongo BD
/**/
//app.use(cors())
//app.use(express.json());
//app.use(routs);

//server.listen(3000);