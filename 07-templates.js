/* Requiring zone */
const express = require('express');
const morgan = require('morgan');

/* Initializing zone */
const app = express();

/* Settings */
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

/* Middleware field */
app.use(morgan('dev'));

/* Routing  field*/
app.get('/', (request, response) => {
  response.render('index');
});

app.get('/login', (request, response) => {
  response.render('login');
});

app.get('*', (request, response) => {
  response.end('Not found!');
});

/* Initializing server */
app.listen(3000, () => {
  console.log('server working...');
});