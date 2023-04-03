// 4. Tworzenie aplikacji ExpressJS. Importowanie modułów
const express = require('express');
const config = require('./config').config;

const questions = require('./questions').questions;

const app = express();

app.get('/api/questions', (request, response) => {
    response.send(questions);
});

app.listen(config.port, function () {
    console.info(`Server is running at port ${config.port}`);
});