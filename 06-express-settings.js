/* Requiring zone */
const express = require('express');
const morgan = require('morgan');

/* Initializing zone */
const app = express();

/* Settings */
app.set('app-name', 'My first server');

/* Middleware field */
app.use(morgan('dev'));

/* Routing  field*/
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
app.listen(3000, () => {
  console.log('server working...');
  console.info(`App name: ${app.get('app-name')}`);
});