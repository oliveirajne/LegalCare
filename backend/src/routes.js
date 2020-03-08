const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload')

const SessionController = require('./controllers/SessionController');
// const SpotController = require('./controllers/SpotController');
const OcorrenciaController = require('./controllers/OcorrenciaController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);
routes.get('/ocorrencias', OcorrenciaController.index);
routes.post('/ocorrencias', OcorrenciaController.store);
routes.get('/dashboard', DashboardController.show);
routes.post('/ocorrencias/:ocorrencia_id/bookings', BookingController.Store);


module.exports = routes;