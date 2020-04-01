/* Requiring express */
const express = require('express');

/* Initializing express */
const app = express();

/* GET request */
app.get('/', (request, response) => {
  response.end('Hello from express');
});

/* Initializing server */
app.listen(3000, () => console.log('server working'));