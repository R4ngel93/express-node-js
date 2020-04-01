/* Requiring express */
const express = require('express');

/* Requiring morgan */
const morgan = require('morgan');

/* Initializing express */
const app = express();

/* Middleware - morgan */
app.use(morgan('dev'));

/* Routing */
app.get('/', (request, response) => {
  response.end('Hello from express');
});

app.get('/login', (request, response) => {
  response.end('Login');
});

app.get('*', (request, response) => {
  response.end('Not found!');
});

/* Initializing server */
app.listen(3000, () => console.log('server working...'));