/* Requiring express */
const express = require('express');

/* Initializing express */
const app = express();

/* Middlewares */
app.use((request, response, next) => {
  console.log(`request url: ${request.url}`);
  next();
});

app.use((request, response, next) => {
  console.log('has passed through this function');
  next();
});

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