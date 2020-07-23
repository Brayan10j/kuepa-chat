const router = require('express').Router();
const passport = require('passport');
const userCtrl = require('../controller/users.controller');


//ROUTERS





//
router.post('/users/signup', userCtrl.registrerUser);


//
router.post('/users/signin', userCtrl.login);



module.exports = router;
