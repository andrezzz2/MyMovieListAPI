var express = require('express');
var router = express.Router();

//middleware
router.use(function timeLog(req, res, next) {
  
  next();
});

const controller = require('../controllers/lists.controllers.js');

router.post('/getAll', controller.getAll);
router.post('/addTitle', controller.addTitle);

module.exports = router;