var express = require('express');
var router = express.Router();

//middleware
router.use(function timeLog(req, res, next) {
  
  next();
});

const controller = require('../controllers/users.controllers.js');

router.post('/signUp', controller.signUp);
router.post('/getInfos', controller.getInfos);
router.post('/update', controller.update);

module.exports = router;