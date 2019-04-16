'use strict'

require('dotenv').config();

const express = require('express');

const app = express();

const PORT = process.env.PORT;

app.use(express.static('./public'));

app.get('/', (request, response) => response.send(index));

app.get('/hello', (request, response) => {
    response.status(200).send('<h1>Hello</h1>')
});

app.get('/data', (request, response) => {
    let airplane = {
        departure: Date.now(),
        canFly: true,
        pilot: 'Well trained'
    }

    response.status(200).json(airplane);
});

app.use('*', (request, response) => response.send('Sorry, that route does not exist'));

app.listen(PORT, () => console.log(`My FIRST Server is listening on PORT ${PORT}`));

