'use strict';

const Api = require('claudia-api-builder');
const api = new Api();

const getQuestion = require('./handlers/get-question.js');

api.get('/question/{id}', (request) => {
    return getQuestion(request.pathParams.id);
}, {
    success: 201,
    error: 400
});

module.exports = api;