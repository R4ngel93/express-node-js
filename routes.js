const express = require('express');
const router = express.Router();

/* Routing  field*/
router.get('/', (request, response) => {
  response.render('index');
});

router.get('/login', (request, response) => {
  response.render('login');
});



module.exports = router;