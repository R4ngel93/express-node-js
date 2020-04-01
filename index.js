/* Requiring packages */
const express = require('express');
const morgan = require('morgan');

/* Initializing zone */
const app = express();

/* Requiring routes */
const routes = require('./routes');
const routesApi = require('./route-api');

/* Settings */
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

/* Middleware field */
app.use(morgan('dev'));

/* Routing  field*/
app.use(routes);
app.use('/api', routesApi);

app.get('*', (request, response) => {
  response.end('Not found!');
});

/* Initializing server */
app.listen(3000, () => {
  console.log('server working...');
});